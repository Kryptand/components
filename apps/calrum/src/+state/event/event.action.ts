import { Action } from "redux";
import { DateEvent } from "../../models/event";
export interface OverlayStateChangeEvent{
  change:boolean;
  origin:Date;
}
export enum EVENT_ACTIONS {
  AddEvent = "[Event] Add",
  DeleteEvent = "[Event] Delete",
  UpdateEvent = "[Event] Update",
  OverlayStateChangeEvent="[Event] OverlayStateChange"
}
export interface AddEventAction extends Action<EVENT_ACTIONS.AddEvent> {
  event: DateEvent;
}
export interface OverlayStateChangeEventAction extends Action<EVENT_ACTIONS.OverlayStateChangeEvent>{
  change:OverlayStateChangeEvent;
}
export interface DeleteEventAction extends Action<EVENT_ACTIONS.DeleteEvent> {
  id: string;
}
export interface UpdateEventAction extends Action<EVENT_ACTIONS.UpdateEvent> {
  event: DateEvent;
}
export type EventActionUnion =
  | AddEventAction
  | UpdateEventAction
  | OverlayStateChangeEventAction
  | DeleteEventAction;

export const addEvent = (event: DateEvent) => (
  dispatch: any,
  getState: any
) => {
    getState;
  dispatch({
    type: EVENT_ACTIONS.AddEvent,
    event
  });
};
export const overlayStateChange=(change:OverlayStateChangeEvent)=>(
  dispatch: any,
  getState: any
) => {
    getState;
  dispatch({
    type: EVENT_ACTIONS.OverlayStateChangeEvent,
    change
  });
};
export const removeEvent = (id: string) => (
  dispatch: any,
  getState: any
) => {
    getState;
  dispatch({
    type: EVENT_ACTIONS.DeleteEvent,
    id
  });
};
