import { Term, BlankNode } from "rdf-js";
import * as RdfExt from '..'
import { PropType } from "./_PropType";

declare interface BlankNodeExt extends RdfExt.BlankNode {
  termType: PropType<BlankNode, 'termType'>;
  value: PropType<BlankNode, 'value'>;
  equals(other?: Term | null): boolean;
}

interface BlankNodeExtConstructor {
  new(id: string): BlankNodeExt;
}

export = BlankNodeExtConstructor;
