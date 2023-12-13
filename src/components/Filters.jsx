import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import { FormInput } from "./";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
import { formatPrice } from "../utils";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        name="search"
        label="search product"
        defaultValue={search}
        size="input-sm"
      />
      {/* Select Company */}
      <FormSelect
        name="company"
        label="Select Company"
        list={meta.companies}
        defaultValue={company}
        size="select-sm"
      />
      {/* Select Category */}
      <FormSelect
        name="category"
        label="Select Categories"
        list={meta.categories}
        defaultValue={category}
        size="select-sm"
      />
      {/* Select Order */}
      <FormSelect
        name="orders"
        label="Sort By"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
        size="select-sm"
      />
      {/* Range Price */}
      <FormRange name="price" label="Price" price={price} size="range-sm" />
      {/* Checklist Shipping */}
      <FormCheckbox
        name="shipping"
        label="Free Shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className="btn btn-primary btn-sm ">
        Filter
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
