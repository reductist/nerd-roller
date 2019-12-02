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
      console.log(extractCrCoins(selectedCR));
      console.log(extractCrItems(selectedCR));
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
  const getKeys = (obj) => {
    return Object.keys(obj);
  }
  const getVals = (obj) => {
    return Object.values(obj);
  }
  const extractCrCoins = (cr) => {
    let coinObj = hoardCoinsTables.coinHoard[prependCoinString(cr)];
    let coinVals = coinObj[0];
    return getVals(coinVals);
  }
  const extractCrCoinsKeys = (cr) => {
    let coinObj = hoardCoinsTables.coinHoard[prependCoinString(cr)];
    let coinEntries = Object.values(coinObj)[0];
    let coinKeys = Object.keys(coinEntries);
    return coinKeys;
  }
  const extractItemVals = (cr) => {
    let itemObj = hoardTreasureTables[prependItemString(cr)];
    let itemVals = itemObj.map( el => Object.values(el));
    return itemVals;
  }
  const extractCrItems = (cr) => {
    return hoardTreasureTables[prependItemString(cr)];
  }

  $: selectedCoins = (selectedCR) ? extractCrCoins(selectedCR) : false;
  $: selectedCoinKeys = (selectedCR) ? extractCrCoinsKeys(selectedCR) : false;
  $: selectedItems = (selectedCR) ? extractCrItems(selectedCR) : false;
  $: selectedItemVals = (selectedCR) ? extractItemVals(selectedCR) : false;
</script>

<style>
  #page-ui-wrapper {
    grid-template-columns: 0.05fr 3fr 0.5fr 6fr 0.05fr;;
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
    width: -webkit-fill-available;
    justify-self: center;
  }
  #tableDiv {
    grid-column: 4;
    grid-row: 2;
    background-color: #090c16;
    width: -webkit-fill-available;
  }
  .table-wrapper {
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
    grid-template-rows: 30px 2fr 1fr;
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
    padding: 0 2rem 1rem 2rem;
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
    background: #000;
    padding-left: 1.5rem;
    border: 1px solid #4a4b4f;
    border-collapse: collapse;
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
  #alert-close {
    cursor: pointer;
    font-size: 2rem;
    background: #00000000;
    transform: scaleX(1.5);
    transition: all 500ms ease-in-out 250ms;
    width: 90px;
    border: none;
    display: inline-flex;
    padding: 0;
    float: right;
    justify-content: center;
    color: #fff;
    line-height: 0.6;
    font-family: cursive;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  #alert-close:hover {
    color: #ff0076;
    transform: scale3d(2.5,2,1) rotate(180deg);
    transform-origin: center;
  }
  #backToPageload {
    margin: 0 auto;
    text-align: center;
  }
  .table-title {
    font-weight: 100;
    font-size: 2rem;
    border: 1px solid #c78fef;
    border-collapse: collapse;
    width: 95%;
    color: #c78fef;
    background: #060909;
    text-align: center;
    line-height: 1.8;
  }
  .table-content {
    width: 95%;
  }
  table {
    font-weight: 100;
    color: #1a1c23;
    background-color: #efeff6;
    margin-bottom: 4rem;
    border-collapse: collapse;
    font-family: 'Share Tech Mono';
    table-layout: fixed;
    width: 100%;
  }
  thead {
    font-size: 1.5rem;
    font-family: 'Fira Sans Extra Condensed';
    background: #0d0d0f;
    border: 1px solid #fff;
    border-top: none;
  }
  tbody {
    font-size: 0.8rem;
    font-weight: 100;
    border: 1px solid #fff;
    font-family: 'Share Tech Mono';
  }
  .item-tbody {
    font-size: 0.75rem;
  }
  th {
    padding: 5px 1px 5px 10px;
    background: #2d2f3a;
    color: #fff;
    border: 0.5px solid #8a8d92;
    border-top: none;
    font-family: 'Fira Code';
    font-size: 1rem;
    text-align: left;
  }
  .item-header-1 {
    width: 10%;
  }
  .item-header-2 {
    width: 25%;
  }
  tr:nth-child(even) {
    background: #9a9da733;
  }
  td {
    padding: 5px 1px 5px 10px;
    border: 0.5px solid #666;
    border-collapse: collapse;
    text-align: left;
  }
  .coin-tbody {
    font-size: 0.9rem;
  }
  .item-tbody {
    font-size: 0.7rem;
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
    <div class="table-wrapper coin-table-wrapper">
      {#if selectedCR}
        <div class="table-title">
          Coins (CR{(selectedCR)})
        </div>
      {/if}
      <div class="table-content">
        {#if selectedCoins}
          <table class=coin-table>
            <thead>
              {#each selectedCoinKeys as keys}
                <th>{keys}</th>
              {/each}
            </thead>
            <tbody class="coin-tbody">
              <tr>
                {#each selectedCoins as coins}
                  <td>{coins}</td>
                {/each}
              </tr>
            </tbody>
          </table>
        {/if}
      </div>
    </div>

    <div class="table-wrapper item-table-wrapper">
      {#if selectedCR}
        <div class="table-title">
          Treasure (CR{(selectedCR)})
        </div>
      {/if}
      <div class="table-content">
        {#if selectedItems}
          <table class="item-table">
            <thead>
              <th class="item-header-1">range</th>
              <th class="item-header-2">loot</th>
              <th class="item-header-3">magic_items</th>
            </thead>
            <tbody class="item-tbody">
              {#each selectedItemVals as items}
                <tr>
                  {#each items as item}
                  <td>{item}</td>
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        {/if}
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
