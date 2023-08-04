import React from "react";
import IconHomeAssistant from "../../ui/HomeAss";
import IconDollar from "../../ui/Dollar";
import IconPeopleArrows from "../../ui/People";
import { Button } from "react-bootstrap";

function Impact() {
  return (
    <div className="my-5 mx-5">
      <h2 className="mb-5">Community Impact</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center mb-4">
        <div>
          <IconHomeAssistant />
          <h3 className="mt-3">Easier recycling</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            tenetur eveniet temporibus facilis!
          </p>
        </div>
        <div>
          <IconDollar />
          <h3 className="mt-3">Easier recycling</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            tenetur eveniet temporibus facilis!
          </p>
        </div>
        <div>
          <IconPeopleArrows />
          <h3 className="mt-3">Easier recycling</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            tenetur eveniet temporibus facilis!
          </p>
        </div>
      </div>
      <p className="text-center">
        You can make a difference for your community.
      </p>
      <Button className="text-center w-100 py-3" variant="success">
        Sign Up
      </Button>
    </div>
  );
}

export default Impact;
