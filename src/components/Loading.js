import React from "react";

const Loading = () => {
  return (
    <div>
      <div class="text-center">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Loading...</span>
      </button>
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};

export default Loading;
