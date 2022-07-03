export declare class NativeStorageService {
    constructor();
    setItemAsync(key: string, value: string): Promise<boolean>;
    getItemAsync(key: string): Promise<string>;
    removeItemAsync(key: string): Promise<boolean>;
}
