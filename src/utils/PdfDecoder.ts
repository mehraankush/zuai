export function base64ToBlob(base64: string, contentType: string): Blob {
    const bytes = window.atob(base64);
    const arrayBuffer = new ArrayBuffer(bytes.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < bytes.length; i++) {
        int8Array[i] = bytes.charCodeAt(i);
    }
    return new Blob([int8Array], { type: contentType });
}