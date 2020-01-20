// Type definitions for rdf-ext 1.3
// Project: https://github.com/rdf-ext/rdf-ext
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as RDF from 'rdf-js';
import DataFactory = require('./lib/DataFactory');
import EventEmitter = require('events');
import { Stream } from 'stream';
import { PropType } from './lib/_PropType';

type SinkMap<InputStream extends EventEmitter, OutputStream extends EventEmitter> = {
  find(mediaType: string): RDF.Sink<InputStream, OutputStream>;
  import(mediaType: string, input: any, options: any): any;
  list(): string[];
} & {
  [mediaType: string]: RDF.Sink<InputStream, OutputStream>;
};

declare namespace DataFactoryExt {
  interface Dataset extends RDF.Dataset<Quad> {}

  interface Quad extends RDF.Quad {

  }

  interface BlankNode extends RDF.BlankNode {
    toCanonical(): string;
    toJSON(): {
      value: PropType<BlankNode, 'value'>;
      termType: PropType<BlankNode, 'termType'>;
    };
  }
}

declare class DataFactoryExt extends DataFactory {
  static asEvent: (p: any) => EventEmitter;
  static waitFor: (event: any) => Promise<any>;
  static Parsers: SinkMap<EventEmitter, Stream>;
  static Serializers: SinkMap<Stream, EventEmitter>;
}

export = DataFactoryExt;
