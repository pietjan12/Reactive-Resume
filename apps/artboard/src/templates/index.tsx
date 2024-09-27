import { Template } from "@reactive-resume/utils";

import { Infiniot } from "./infiniot";

export const getTemplate = (template: Template) => {
  switch (template) {
    case "infiniot": {
      return Infiniot;
    }
  }
};
