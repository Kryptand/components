import { css } from 'lit-element';

export const style = css`
  :host {
    display: block;
    height: inherit;
    overflow-y: auto;
    box-sizing: border-box;
    border: 1px solid #1c2833;
  }
  .event{
    background:var(--calrum-secondary-10pct);
    border-bottom: 1px solid #f765b8;
    display: flex;
  }
  .event:hover{
      background:var(--calrum-secondary);
      -webkit-transition: background-color 500ms linear;
      -ms-transition: background-color 500ms linear;
      transition: background-color 500ms linear;
  }
  .date-header{
    display:flex;
  }
.text{
    padding-left: 4px;
    padding-top: 4px;
  }
  .event-empty{
    margin-right:4px;
    max-height: 23px;
    background:#faebf4;
  }

  .text{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .spacer{
    flex-grow: 1;
  }
  .delete{
    color:#f765b8;
  }

`;
