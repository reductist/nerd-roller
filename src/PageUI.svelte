<script>
  import ItemTable from './ItemTable.svelte';
  import {
    hoardTreasureTables,
    hoardCoinsTables
  } from './treasureData.js'

  let selectedCR;  // user selection bound to this variable

  let CRMenu = [
    { id: 1, choice: 'CR 0-4', value: '0_4' },
    { id: 2, choice: 'CR 5-10', value: '5_10' },
    { id: 3, choice: 'CR 11-16', value: '11_16' },
    { id: 4, choice: 'CR 17+', value: '17' },
  ];

  // suuuuper basic routing state & handler functions
  let pageloadUI = true;
  let rollForm = false;
  let alertDialog = false;

  function proceedToTableSelection() {
    if (selectedCR) {
      pageloadUI = false;
      rollForm = true;
      console.log(getCrCoins(selectedCR));
      console.log(getCrItems(selectedCR));
    } else {
      alertDialog = true;
    }
  }

  function closeDialog() {
    alertDialog = false;
  }

  function backToPageloadUI() {
    rollForm = false;
    pageloadUI = true;
  }

  // helper functions to extract table letter identifier (last letter in string, ex; table _A_)
  const prependItemString = (cr) => `hoardTreasure${cr}`;
  const prependCoinString = (cr) => `coins${cr}`;
  // return table identifier from user's radio button selection
  function getCrCoins(cr) {
    return hoardCoinsTables.coinHoard[prependCoinString(cr)];
  }
  function getCrItems(cr) {
    return hoardTreasureTables[prependItemString(cr)];
  }
</script>

<style>
  #page-ui-wrapper {
    grid-template-columns: 0.05fr auto 0.1fr auto 0.05fr;
    font-family: 'Fira Sans';
    font-weight: 100;
    line-height: 2;
    max-height: 80vh;
    color: #00ffc4;
    display: grid;
    grid-template-rows: 1fr auto 1fr 1.5fr;
  }
  #selection-wrapper {
    grid-column: 2;
    grid-row: 2;
    background-color: #090c16;
    font-family: 'Overpass Mono', monospace;
    font-size: calc(10px + 1vw);
    font-weight: 100;
    width: fit-content;
    min-width: 25vw;
    justify-self: center;
  }
  #tableDiv {
    grid-column: 4;
    grid-row: 2;
    background-color: #090c16;
  }
  #table-wrapper {
    padding: 0.5rem 1rem 1rem 1rem;
    grid-row: 2;
    background-color: #090c16;
    text-align: -webkit-center;
  }
  #typeWrapper {
    grid-row: 1;
  }
  #CRWrapper {
    display: grid;
    grid-template-rows: 1fr auto;
  }
  .section-title {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-weight: 100;
    font-size: 2rem;
    border: 1px solid #00ffc4;
    border-collapse: collapse;
    padding: 6px;
    color: #00ffc4;
    background: #060909;
    text-align: center;
    margin: 0;
  }
  .input-wrapper {
    grid-row: 2;
    background-color: #090c16;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
  }
  .centering-input-wrapper {
    grid-column: 1 / -1;
    grid-row: 2;
    justify-self: center;
    min-height: 18vh;
    align-items: center;
  }
  .input-div {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-weight: 200;
    font-size: calc(12px + 0.8vw);
    color: #c78fef;
    padding: 1rem 2rem 1rem 2rem;
    text-align: justify;
    align-self: center;
  }
  #crForm {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .radio-wrap {
    display: block;
    text-align: justify;
    margin: 0 auto;
  }
  .radioInput2 {
    grid-column: 1;
    grid-row: 1;
    display: inline-block;
    padding: 1rem 1rem 1rem 0.5rem;
  }
  .radioInput3 {
    grid-column: 2;
    grid-row: 1;
    display: inline-block;
    padding: 1rem 1rem 1rem 0.5rem;
  }
  .radioInput4 {
    grid-column: 1;
    grid-row: 2;
    display: inline-block;
    padding: 1rem 1rem 1rem 0.5rem;
  }
  .radioInput5 {
    grid-column: 2;
    grid-row: 2;
    display: inline-block;
    padding: 1rem 1rem 1rem 0.5rem;
  }
  .navBtn {
    grid-row: 4;
    cursor: pointer;
    margin: 0 auto;
    grid-column: 2 / 5;
    font-family: 'Share Tech Mono';
    font-size: calc(12px + 1vw);
    width: 150px;
    background-color: unset;
    color: #fff;
    border: 2px solid #fff;
  }
  .navBtn:hover {
    border: 2px solid #c78fef;
    color: #c78fef;
    background: #000;
  }
  #backToPageload {
    margin: 0 auto;
    text-align: center;
  }
  table {
    border-collapse: collapse;
    border: 1px solid #fff;
    font-family: 'Share Tech Mono';
    font-weight: 100;
  }
  thead {
    font-size: 1.5rem;
    font-family: 'Fira Sans Extra Condensed';
    background: #000;
  }
  tbody {
    font-size: 0.8rem;
    font-weight: 100;
    background-color: #2f3137;
    color: #fff;
    font-family: 'Share Tech Mono';
  }
  td {
    padding: 0.2rem 1rem 0.1rem 1rem;
    text-align: right;
    border: 1px solid #666;
  }
  .alert-dialog {
    position: absolute;
    left: 30%;
    top: 63%;
    z-index: 10;
    width: 40vw;
    height: 4vh;
    border: 2px solid #ff0055;
    background-color: #000;
    font-size: 1rem;
    color: #ffffff;
    text-align: center;
    padding: 3rem;
  }
</style>

{#if pageloadUI}

{#if alertDialog}
  <div class="alert-dialog">
    Please provide a CR table selection before proceeding.
    <button id="alert-close" on:click="{() => closeDialog()}">X</button>
  </div>
{/if}

<div id="page-ui-wrapper">
  <div id="selection-wrapper">
    <div id="CRWrapper" class="choiceWrapper">
      <p id="tableTitle" class="section-title">Challenge Rating</p>
      <div class="input-wrapper">
        <div class="centering-input-wrapper">
          <div class="input-div">
            <form id="crForm">
            {#each CRMenu as cr (cr.id)}
              <div class="radio-wrap">
                <input
                  class=radioInput{cr.id+1}
                  type=radio
                  bind:group={selectedCR}
                  id=radio{cr.id}
                  value={cr.value}
                ><label class=radioInput{cr.id+1} for=radio{cr.id}>{cr.choice}</label>
              </div>
            {/each}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div id="tableDiv">
    <p id="typeTitle" class="section-title">Selection</p>
    <div id="table-wrapper">
      <div id="table-title">
        table title goes here
      </div>
      <div id="table-content">
        <table>
	        <thead>
              <tr>
              <td>one</td>
              <td>two</td>
              <td>three</td><td>four</td></tr>
            </thead>
          <tbody>
            <tr>
              <td>dat1</td>
              <td>dat2</td>
              <td>dat3</td>
              <td>dat4</td>
            </tr>
            <tr>
              <td>dat1</td>
              <td>dat2</td>
              <td>dat3</td>
              <td>dat4</td>
            </tr>
            <tr>
              <td>dat1</td>
              <td>dat2</td>
              <td>dat3</td>
              <td>dat4</td>
            </tr>
            <tr>
              <td>dat1</td>
              <td>dat2</td>
              <td>dat3</td>
              <td>dat4</td>
            </tr>
            <tr>
              <td>dat1</td>
              <td>dat2</td>
              <td>dat3</td>
              <td>dat4</td>
            </tr>
            <tr>
              <td>dat1</td>
              <td>dat2</td>
              <td>dat3</td>
              <td>dat4</td>
            </tr>
            <tr>
              <td>dat1</td>
              <td>dat2</td>
              <td>dat3</td>
              <td>dat4</td>
            </tr>
            <tr>
              <td>dat1</td>
              <td>dat2</td>
              <td>dat3</td>
              <td>dat4</td>
            </tr>
            <tr>
              <td>dat1</td>
              <td>dat2</td>
              <td>dat3</td>
              <td>dat4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <button id="fwdToRollBtn" class="navBtn" 
  on:click="{() => proceedToTableSelection()}"
  >
    Next
  </button>
</div>
{/if}

{#if rollForm}
<div class="rollFormAppDiv">
  <ItemTable />
</div>

<div id="backToPageload">
  <button id="backToPageloadBtn" class="navBtn" on:click="{() => backToPageloadUI()}">
    Back
  </button>
</div>
{/if}