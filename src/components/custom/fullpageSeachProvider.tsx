"use client";
import React, { createContext, useState, ReactNode } from "react";

interface SearchContextProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
}

export const SearchContext = createContext<SearchContextProps | undefined>(
	undefined
);

interface SearchProviderProps {
	children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	return (
		<SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearch = () => {
	const context = React.useContext(SearchContext);
	if (context === undefined) {
		throw new Error("useSearch must be used within a SearchProvider");
	}
	return context;
};
