import { css } from "lit-element";

export const style= css`
.day-of-week {
    display: flex;
    width: 100%;
  }
  html,
  body,
  .grid-container {
    height: calc(100vh - 55px);
    margin: 0;
  }


  .month-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto calc(100%/7) calc(100%/7) calc(100%/7) calc(100%/7) calc(100%/7) calc(100%/7) calc(100%/7);
    grid-template-areas: "weeknames weeknames weeknames weeknames weeknames weeknames weeknames" "first-week first-week first-week first-week first-week first-week first-week" "second-week second-week second-week second-week second-week second-week second-week" "third-week third-week third-week third-week third-week third-week third-week" "fourth-week fourth-week fourth-week fourth-week fourth-week fourth-week fourth-week" "fifth-week fifth-week fifth-week fifth-week fifth-week fifth-week fifth-week" "sixth-week sixth-week sixth-week sixth-week sixth-week sixth-week sixth-week";
  }

  .weeknames {
    border-bottom: 3px solid var(--accent-color);
    display: grid;
    color: var(--calrum-primary-contrast);
    text-transform: uppercase;
    text-align: center;
    background: var(--calrum-on-background);
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". . . . . . .";
    grid-area: weeknames;
  }

  .first-week {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: ;
    grid-template-areas: ". . . . . . .";
    grid-area: first-week;
  }

  .second-week {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: ;
    grid-template-areas: ". . . . . . .";
    grid-area: second-week;
  }

  .third-week {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: ;
    grid-template-areas: ". . . . . . .";
    grid-area: third-week;
  }

  .fourth-week {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: ;
    grid-template-areas: ". . . . . . .";
    grid-area: fourth-week;
  }

  .fifth-week {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: ;
    grid-template-areas: ". . . . . . .";
    grid-area: fifth-week;
  }

  .sixth-week {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: ;
    grid-template-areas: ". . . . . . .";
    grid-area: sixth-week;
  }
  #year,#add-alert {
    margin: 5px;
  }
  .kryptand-icon{
    color:var(--calrum-primary-contrast);
  }
`;
