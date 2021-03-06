// Original file: proto/grpc/testing/test.proto

import * as grpc from '../../../../src'
import { Empty as _grpc_testing_Empty, Empty__Output as _grpc_testing_Empty__Output } from '../../grpc/testing/Empty';

/**
 * A service to remotely control health status of an xDS test server.
 */
export interface XdsUpdateHealthServiceClient extends grpc.Client {
  SetNotServing(argument: _grpc_testing_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  SetNotServing(argument: _grpc_testing_Empty, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  SetNotServing(argument: _grpc_testing_Empty, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  SetNotServing(argument: _grpc_testing_Empty, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  setNotServing(argument: _grpc_testing_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  setNotServing(argument: _grpc_testing_Empty, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  setNotServing(argument: _grpc_testing_Empty, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  setNotServing(argument: _grpc_testing_Empty, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  
  SetServing(argument: _grpc_testing_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  SetServing(argument: _grpc_testing_Empty, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  SetServing(argument: _grpc_testing_Empty, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  SetServing(argument: _grpc_testing_Empty, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  setServing(argument: _grpc_testing_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  setServing(argument: _grpc_testing_Empty, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  setServing(argument: _grpc_testing_Empty, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  setServing(argument: _grpc_testing_Empty, callback: (error?: grpc.ServiceError, result?: _grpc_testing_Empty__Output) => void): grpc.ClientUnaryCall;
  
}

/**
 * A service to remotely control health status of an xDS test server.
 */
export interface XdsUpdateHealthServiceHandlers extends grpc.UntypedServiceImplementation {
  SetNotServing(call: grpc.ServerUnaryCall<_grpc_testing_Empty__Output, _grpc_testing_Empty>, callback: grpc.sendUnaryData<_grpc_testing_Empty>): void;
  
  SetServing(call: grpc.ServerUnaryCall<_grpc_testing_Empty__Output, _grpc_testing_Empty>, callback: grpc.sendUnaryData<_grpc_testing_Empty>): void;
  
}
