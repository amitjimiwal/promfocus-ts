import { createSlice } from '@reduxjs/toolkit'
import { POMODORO, SHORT_BREAK, LONG_BREAK } from '../../constant'
import { reduxState } from '../../interface/appinterface'
const initialState: reduxState = {
         mode: POMODORO,
         round: 1,
         longBreakInterval: 4,
         modes: {
                  [POMODORO]: {
                           id: POMODORO,
                           label: "Pomodoro",
                           time: 25,
                  },
                  [SHORT_BREAK]: {
                           id: SHORT_BREAK,
                           label: "Short Break",
                           time: 5,
                  },
                  [LONG_BREAK]: {
                           id: LONG_BREAK,
                           label: "Long Break",
                           time: 15,
                  },
         },
         settingsopen:false
}

const timerSlice = createSlice({
         name: 'timer',
         initialState,
         reducers: {
                  setMode: (state, action) => {
                           state.mode = action.payload
                  },
                  increaseRound: (state) => {
                           state.round += 1;
                  },
                  updateModeTime: (state, action: { payload: { mode: string; time: number } }) => {
                           const { mode, time } = action.payload;
                           state.modes[mode].time = time;
                  },
                  setLongBreakInterval: (state, action: { payload: number }) => {
                           state.longBreakInterval = action.payload
                  },
                  opensettings:(state)=>{
                      state.settingsopen= !state.settingsopen
                  }
         }
})

export default timerSlice.reducer;
export const { setLongBreakInterval, setMode, updateModeTime, increaseRound ,opensettings} = timerSlice.actions