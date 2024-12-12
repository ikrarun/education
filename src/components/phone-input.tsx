import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { BetterButton } from "./ui/betterbutton";

type PhoneInputProps = Omit<
	React.ComponentProps<"input">,
	"onChange" | "value" | "ref"
> &
	Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
		onChange?: (value: RPNInput.Value) => void;
	};

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
	React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
		({ className, onChange, ...props }, ref) => {
			return (
				<RPNInput.default
					ref={ref}
					className={cn(
						"flex h-fit grow group group-focus:ring-1 ring-ring focus:ring-1 focus-within:ring-1 rounded-lg group-hover:ring-1 group-focus-visible:ring-1 flex-row ",
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
					onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
					{...props}
				/>
			);
		}
	);
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input">
>(({ className, ...props }, ref) => (
	<Input
		className={cn(
			"rounded-e-lg relative group-hover:ring-ring group-focus:ring-1 group-focus-visible:ring-1 ring-ring rounded-s-none",
			className
		)}
		{...props}
		ref={ref}
	/>
));
InputComponent.displayName = "InputComponent";

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
					className='flex gap-1 group-hover:ring-1 group-focus:ring-1 group-focus-visible:ring-1 border-[1] group ring-ring ring-0 h-13 flex-row items-center justify-center rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10'
					disabled={disabled}>
					<FlagComponent
						country={selectedCountry}
						countryName={selectedCountry}
					/>
					<ChevronsUpDown
						className={cn(
							"-mr-2 size-4 opacity-50",
							disabled ? "hidden" : "opacity-100"
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
			<span
				className='text-sm group-hover:ring-1
			 group-focus-visible:ring-1 ring-ring
			 text-foreground/50'>{`+${RPNInput.getCountryCallingCode(
				country
			)}`}</span>
			<CheckIcon
				className={`ml-auto size-4 ${
					country === selectedCountry ? "opacity-100" : "opacity-0"
				}`}
			/>
		</CommandItem>
	);
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
	const Flag = flags[country];

	return (
		<span className='flex flex-col self-center w-fit overflow-hidden rounded-sm object-fill'>
			{Flag && <Flag title={countryName} />}
		</span>
	);
};

export { PhoneInput };
