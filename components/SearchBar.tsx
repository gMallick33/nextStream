"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { SearchIcon, X } from "lucide-react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onClear = () => {
    setSearch("");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: { query: search },
      },
      { skipEmptyString: true }
    );
    router.push(url);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-row items-center">
          <Input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search"
            defaultValue={search}
            className="lg:w-[500px]"
          ></Input>
          {search && <X onClick={onClear} />}

          <Button
            type="submit"
            size="sm"
            variant="secondary"
            className="rounded-l-none"
          >
            <SearchIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
