import {  Quad } from 'rdf-js';
import ext = require('..')
import { PropType } from './_PropType';
import LiteralExt = require('./Literal');
import NamedNodeExt = require('./NamedNode');
import VariableExt = require('./Variable');
import DefaultGraphExt = require('./DefaultGraph');

interface QuadExt extends Quad {
  subject: NamedNodeExt | ext.BlankNode | VariableExt;
  predicate: NamedNodeExt | VariableExt;
  object: NamedNodeExt | LiteralExt | ext.BlankNode | VariableExt;
  graph: DefaultGraphExt | NamedNodeExt | ext.BlankNode | VariableExt;
  toCanonical(): string;
  toJSON(): {
    subject: ReturnType<PropType<PropType<QuadExt, 'subject'>, 'toJSON'>>;
    predicate: ReturnType<PropType<PropType<QuadExt, 'predicate'>, 'toJSON'>>;
    object: ReturnType<PropType<PropType<QuadExt, 'object'>, 'toJSON'>>;
    graph: ReturnType<PropType<PropType<QuadExt, 'graph'>, 'toJSON'>>;
  };
}

export = QuadExt;
