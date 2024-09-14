import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div>
      <h2>That page doesn't appear to exist. Please check the address carefully</h2>
      <Link to="/">Return to homepage</Link>
    </div>
  );
}