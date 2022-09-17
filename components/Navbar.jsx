import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{ maxWidth: "600px" }} className="mx-auto">
      <div className="d-flex justify-content-center gap-5 fs-4">
        <Link href="/">
          <a className="item text-decoration-none">Home</a>
        </Link>
        <Link href="/exp">
          <a className="item text-decoration-none">Experience</a>
        </Link>
        <Link href="/contact">
          <a className="item text-decoration-none">Contact</a>
        </Link>
        <Link href="/lab-07">
          <a className="item text-decoration-none">Todolist</a>
        </Link>
        <hr />
      </div>
    </div>
  );
}
