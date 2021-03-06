/// <reference types="node" />
import * as Webdav from "webdav-client";
import * as Stream from "stream";
export declare type AsyncFunction = (...parameters) => Promise<any>;
export declare class NextcloudClientProperties {
    webdavConnection: Webdav.Connection;
    username: string;
    url: string;
}
export interface NextcloudClientInterface extends NextcloudClientProperties {
    configureWebdavConnection(options: ConnectionOptions): void;
    pipeStream(path: string, stream: Stream.Readable): Promise<void>;
    as(username: string, password: string): NextcloudClientInterface;
    createFolderHierarchy(path: string): Promise<void>;
    put(path: string, content: string): Promise<void>;
    rename(from: string, to: string): Promise<void>;
    getWriteStream(path: string): Promise<Stream.Writable>;
    getReadStream(path: string): Promise<Stream.Readable>;
    touchFolder(path: string): Promise<void>;
    getFiles(path: string): Promise<[string]>;
    remove(path: string): Promise<void>;
    exists(path: string): Promise<boolean>;
    checkConnectivity(): Promise<boolean>;
    get(path: string): Promise<string | Buffer>;
}
export interface ConnectionOptions {
    url: string;
    username?: string;
    password?: string;
}
