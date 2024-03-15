"use client";

import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "@/services/company/api/getCompanies";
import NewCompanyForm from "./NewCompanyForm";

export function Companies() {
  const companies = useQuery({
    queryKey: "companies",
    queryFn: getCompanies,
  });

  if (companies.isLoading) {
    return <div>Loading...</div>;
  }

  if (companies.isError) {
    return <div>Error: {companies.error.message}</div>;
  }

  return (
    <div>
      <ul>
        {companies.data.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>

      <NewCompanyForm />
    </div>
  );
}
