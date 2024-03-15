"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function FormCreateProduct() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="products title" />
        </div>
        <TextInput id="title" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="products price" />
        </div>
        <TextInput id="price" type="number" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="products description" />
        </div>
        <textarea id="description" placeholder="product description" required />
      </div>
    </form>
  );
}
