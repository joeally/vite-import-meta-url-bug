import { getImportMetaURL } from "./get-import-meta-url";

onmessage = (e) => {
    postMessage(getImportMetaURL());
}