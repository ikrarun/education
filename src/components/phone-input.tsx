import * as React from 'react';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import * as RPNInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { BetterButton } from './ui/betterbutton';

type PhoneInputProps = Omit<
	React.ComponentProps<'input'>,
	'onChange' | 'value' | 'ref'
> &
	Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
		onChange?: (value: RPNInput.Value) => void;
	};

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
	React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
		({ className, onChange, ...props }, ref) => {
			return (
				<RPNInput.default
					ref={ref}
					className={cn(
						'group flex h-fit grow flex-row rounded-lg ring-ring focus-within:ring-1 focus:ring-1 group-hover:ring-1 group-focus:ring-1 group-focus-visible:ring-1',
						className
					)}
					flagComponent={FlagComponent}
					countrySelectComponent={CountrySelect}
					inputComponent={InputComponent}
					smartCaret={false}
					/**
					 * Handles the onChange event.
					 *
					 * react-phone-number-input might trigger the onChange event as undefined
					 * when a valid phone number is not entered. To prevent this,
					 * the value is coerced to an empty string.
					 *
					 * @param {E164Number | undefined} value - The entered value
					 */
					onChange={(value) => onChange?.(value || ('' as RPNInput.Value))}
					{...props}
				/>
			);
		}
	);
PhoneInput.displayName = 'PhoneInput';

const InputComponent = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<'input'>
>(({ className, ...props }, ref) => (
	<Input
		className={cn(
			'relative rounded-e-lg rounded-s-none ring-ring group-hover:ring-ring group-focus:ring-1 group-focus-visible:ring-1',
			className
		)}
		{...props}
		ref={ref}
	/>
));
InputComponent.displayName = 'InputComponent';

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
	disabled?: boolean;
	value: RPNInput.Country;
	options: CountryEntry[];
	onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
	disabled,
	value: selectedCountry,
	options: countryList,
	onChange,
}: CountrySelectProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<BetterButton
					type='button'
					variant='transparent_outline'
					className='h-13 group flex flex-row items-center justify-center gap-1 rounded-e-none rounded-s-lg border-r-0 border-[1] px-3 ring-0 ring-ring focus:z-10 group-hover:ring-1 group-focus:ring-1 group-focus-visible:ring-1'
					disabled={disabled}
				>
					<FlagComponent
						country={selectedCountry}
						countryName={selectedCountry}
					/>
					<ChevronsUpDown
						className={cn(
							'-mr-2 size-4 opacity-50',
							disabled ? 'hidden' : 'opacity-100'
						)}
					/>
				</BetterButton>
			</PopoverTrigger>
			<PopoverContent className='w-[300px] p-0'>
				<Command>
					<CommandInput placeholder='Search country...' />
					<CommandList>
						<ScrollArea className='h-72'>
							<CommandEmpty>No country found.</CommandEmpty>
							<CommandGroup>
								{countryList.map(({ value, label }) =>
									value ? (
										<CountrySelectOption
											key={value}
											country={value}
											countryName={label}
											selectedCountry={selectedCountry}
											onChange={onChange}
										/>
									) : null
								)}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
	selectedCountry: RPNInput.Country;
	onChange: (country: RPNInput.Country) => void;
}

const CountrySelectOption = ({
	country,
	countryName,
	selectedCountry,
	onChange,
}: CountrySelectOptionProps) => {
	return (
		<CommandItem className='gap-2' onSelect={() => onChange(country)}>
			<FlagComponent country={country} countryName={countryName} />
			<span className='flex-1 text-sm'>{countryName}</span>
			<span className='text-sm text-foreground/50 ring-ring group-hover:ring-1 group-focus-visible:ring-1'>{`+${RPNInput.getCountryCallingCode(
				country
			)}`}</span>
			<CheckIcon
				className={`ml-auto size-4 ${
					country === selectedCountry ? 'opacity-100' : 'opacity-0'
				}`}
			/>
		</CommandItem>
	);
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
	const Flag = flags[country];

	return (
		<span className='flex w-fit flex-col self-center overflow-hidden rounded-sm object-fill'>
			{Flag && <Flag title={countryName} />}
		</span>
	);
};

export { PhoneInput };
