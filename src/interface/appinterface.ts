export interface reduxState {
         mode: string;
         round: number;
         longBreakInterval: number;
         modes: {
                  [mode: string]: {
                           id: string;
                           label: string;
                           time: number;
                  };
         };
         settingsopen:boolean;
}