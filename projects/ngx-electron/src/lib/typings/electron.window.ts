import * as Electron from 'electron';
export interface ElectronWindow extends Window {
    // TODO FIX : Electron.RendererInterface is readonly so return any instead
    require(module: string): any;
}
