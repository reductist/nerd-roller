<script>
  import LootTables from './LootTables.svelte'
  import {
    individualTreasureTables,
    hoardTreasureTables,
    hoardCoinsTables
  } from './treasureData.js'

  let CRMenu = [
    { id: 1, selected: false, choice: 'CR 0-4' },
    { id: 2, selected: false, choice: 'CR 5-10' },
    { id: 3, selected: false, choice: 'CR 11-16' },
    { id: 4, selected: false, choice: 'CR 17+' },
  ];

  // suuuuper basic routing state & handler functions
  let pageloadUI = true;
  let rollForm = false;

  function proceedToTableSelection() {
    pageloadUI = false;
    rollForm = true;
  }

  function backToPageloadUI() {
    rollForm = false;
    pageloadUI = true;
  }

  // slice a provided table.data[0][0] for the first 2 and last 2 characters, and cast the result to an int.
  // ex: getLow(tableA.data[0][0])  //95
  let getLow = (str) => Number(str.slice(0, 2));
  let getHigh = (str) => Number(str.slice(3, 5));

  // initialize empty variables for user input binding
  let typeChoice = false;
  let crChoice = false;

  // helper functions to extract table letter identifier (last letter in string, ex; table _A_)
  const extractTableLetter = (str) => str.charAt(str.length - 1)
  const prependObjString = (tblLetter) => `itemTable${tblLetter}`;

  // return table variable based on table string identifier
  function returnTableType(type) {
    // type === (individual || hoard)
    if (type === 'Individual') {
      typeChoice = 'individual';
      return individualTreasureTables;
    } else if (type === 'Hoard') {
      typeChoice = 'hoard';
      return hoardTreasureTables;
    } else {
      typeChoice = false;
      return;
    }
  }
</script>

<style>
  #page-ui-wrapper {
    grid-template-columns: 0.05fr auto 0.1fr auto 0.05fr;
    font-family: 'Fira Sans';
    font-weight: 100;
    line-height: 2;
    height: 80vh;
    color: #00ffc4;
    display: grid;
    grid-template-rows: 0.1fr auto 0.3fr 0.3fr 0.1fr;
  }
  #selection-wrapper {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-rows: auto 0.1fr auto;
    align-content: space-between;
  }
  #tableDiv {
    grid-column: 4;
    grid-row: 2;
    background-color: #090c16;
    font-family: 'Overpass Mono', monospace;
    font-size: calc(10px + 1vw);
    font-weight: 100;
  }
  #table-wrapper {
    padding: 2rem;
  }
  #typeWrapper {
    grid-row: 1;
  }
  #CRWrapper {
    grid-row: 3;
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
    margin: 0 auto;
    background-color: #090c16;
    min-height: 18vh;
    display: grid;
    grid-template-columns: 0.1fr auto auto 0.1fr;
    grid-template-rows: 0.5fr auto 0.5fr;
  }
  .centering-input-wrapper {
    grid-column: 1 / -1;
    grid-row: 2;
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .input-div {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-weight: 200;
    font-size: calc(12px + 0.8vw);
    color: #c78fef;
    padding: 0 2rem 0 2rem;
    text-align: justify;
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
</style>

{#if pageloadUI}
<div id="page-ui-wrapper">
  <div id="selection-wrapper">
    <div id="CRWrapper" class="choiceWrapper">
      <p id="tableTitle" class="section-title">Challenge Rating</p>
      <div class="input-wrapper">
        <div class="centering-input-wrapper">
          {#each CRMenu as cr (cr.id)}
          <div class="input-div">
            <input
              type=radio
              bind:group={CRMenu.selected} 
              value={cr.id}
            >
            <span>{cr.choice}</span>
          </div>
          {/each}
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
        table goes here
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
<div id="lootTableDiv">
  <LootTables />
</div>

<button id="backToPageloadBtn" class="navBtn"
on:click="{() => backToPageloadUI()}">
  Back
</button>
{/if}