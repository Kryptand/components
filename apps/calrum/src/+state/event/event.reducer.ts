import { Reducer } from "redux";
import { createSelector } from 'reselect';
import { DateEvent, DateIdentifier } from "../../models/event";
import { EventActionUnion, EVENT_ACTIONS, OverlayStateChangeEvent } from "./event.action";


export interface EventState {
  ids:number[];
  events: DateEvent[];
  overlayOpened:OverlayStateChangeEvent;
}

const INITIAL_STATE: EventState = {
    ids:[],
    events:[],
    overlayOpened:undefined
};

export const eventReducer: Reducer<EventState, EventActionUnion> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_ACTIONS.AddEvent:
    const ids= state.ids.filter(x=>x!==action.event.dateId);
    return {
        ...state,
        events:[...state.events,action.event],
        ids:[...ids,action.event.dateId]
      };
    case EVENT_ACTIONS.UpdateEvent:
      return {
        ...state,  events:[...state.events,{...state.events.find(x=>x.id===action.event.id),...action.event}],
      };
      case EVENT_ACTIONS.OverlayStateChangeEvent:
        return {
          ...state, overlayOpened:action.change,
        };
    case EVENT_ACTIONS.DeleteEvent:
      console.debug(action);
      const id=state.events.find(x=>x.id===action.id).dateId;
        return {
            ...state,events:state.events.filter(x=>x.id!==action.id),ids:state.ids.filter(x=>x!==id)
        };
    default:
      return state;
  }
};
export const getOverlayStateSelector=(state:EventState)=>state.overlayOpened;

export const getEventsSelector=(state: EventState)=>state.events;
export const getEventsForDate=(event:Date)=>{
  return createSelector(
    getEventsSelector,
  (state:any)=>{

      const id=new DateIdentifier(event).identifier;
      return state.events.filter((x: { id: number | undefined; })=>x.id===id);
    }

  )};
