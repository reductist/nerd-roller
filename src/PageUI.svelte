<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import ItemTable from './ItemTable.svelte';
  import {
    hoardTreasureTables,
    hoardCoinsTables
  } from './treasureData.js'

  const dispatch = createEventDispatcher();

  let rollModal = false;
  let visible = true;
  let selectedCR = false;  // user selection bound to this variable

  // function to exclude any missing data
  let valueCheck = (str) => (str !== '-') ? true : false;

  // slice a provided table.data[0][0] for the first 2 and last 2 characters, and cast the result to an int.
  // ex: getLow(tableA.data[0][0])  //95
  let getLow = (str) => (valueCheck(str)) ? Number(str.slice(0, 2)) : '';
  let getHigh = (str) => (valueCheck(str)) ? Number(str.slice(3, 5)) : '';

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

  let statefulData = {
    selectedCR: (selectedCR) ? selectedCR : false,
    selectedCoins: (selectedCR) ? selectedCoins : false,
    selectedCoinKeys: (selectedCR) ? selectedCoinKeys : false,
    selectedItems: (selectedCR) ? selectedItems : false,
    selectedItemVals: (selectedCR) ? selectedItemVals : false,
    lowRange: (selectedCR) ? getLow(selectedItemVals[0]) : false,
    highRange: (selectedCR) ? getHigh(selectedItemVals[0]) : false,
    preciousTreasure: (selectedCR) ? selectedItemVals[1] : false,
    rollString: (selectedCR) ? selectedItemVals[2] : false,
    rollArray: (selectedCR) ? extractRolls(selectedItemVals[2]) : false,
    table: (selectedCR) ? extractTable(selectedItemVals[2]) : false,
  }

  function proceedToTableSelection() {
    if (selectedCR) {
      dispatch('sendData', {
        statefulData
      });
      console.log(statefulData);
      pageloadUI = false;
      rollForm = true;
    } else {
      alertDialog = true;
    }
  }

  function closeRollModal() {
    rollModal = false;
    document.getElementById('result-div').textContent = '';
    pageloadUI = true;
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
    let itemVals = itemObj.map(el => Object.values(el));
    return itemVals;
  }
  const extractItemRolls = (item) => {
    const regex = /[0-9]/g;
    const handleOnce = item.replace('once', '1d1');
    // 1d6 => [1, 6]
    const diceArr = handleOnce.match(regex);
    const replaceOnce = handleOnce.replace('once', '1d1')
    const hasMultiple = handleOnce.search('and');
    if (item === '-') {
      return '-';
    } else {
      return diceArr;
    }
  }
  const extractCoinRolls = (cr) => {
    // grab the selected CR coin data
    const coinObj = hoardCoinsTables.coinHoard[prependCoinString(cr)];
    // pluck values from object and flatten to single-level array for iteration
    const coinVals = coinObj.flatMap( el => Object.values(el));
    // use toLowerCase() to cast any 'X's to 'x's
    const lowerVals = coinVals.map( el => el.toLowerCase());
    // find array indices of elements containing instructions
    const filterVals = lowerVals.filter( (el, i) => el.indexOf('x') > -1)
    // function that splits a string by ' x ', so we can pluck the numeric values on either side 
    const rollSplit = (arr) => arr.split(' x ');
    // vectorize rollSplit() across the array
    const filteredSplit = filterVals.map( el => rollSplit(el));
    // new array contain rolling instructions and multipliers, by stripping everything after '('
    const substrRolls = [...filteredSplit.map( el => el[0])];
    const substrMultipliers = [...filteredSplit.map( el => el[1].substring(0, el[1].indexOf('(')-1))];
    // remove the 'd'eees nuts & cast strings to numbers
    const rolls = substrRolls.flatMap(el => el.split('d')).map( string => Number(string));
    const resultArray = { rolls: rolls, multipliers: substrMultipliers };
    return resultArray;
  }
  const getRandomInt = (min, max, iterations) => {
    let iterTotal = [];
    for (let i = 0; i <= iterations; i++ ) {
      const loopRand = Math.floor(Math.random() * (max - min + 1)) + min;
      iterTotal.push(loopRand);
      console.log(
      `iteration roll: ${loopRand}
running total: ${iterTotal.reduce(( acc, curr ) => acc + curr, 0)}`);
    }
    const total = iterTotal.reduce(( acc, curr ) => acc + curr, 0);
    return total;
  }
  // takes an array of numbers, ordered like: [{number_of_rolls_1}, {max_roll_1}, {number_of_rolls_2}, {max_roll_2}]
  // for example: [1, 6, 2, 10] === 1d6, 2d10
  // rollDice() parses this array by index into evens and odds. 
  // 'odds' reflect the maximum possible result, used by getRandomInt() to return a random integer 1-{max}
  // 'evens' reflect the number of rolls, and are therefore multiplied against the odds results
  const rollDice = (rollArray) => {
    const evens = rollArray.filter(function (v, i) { return (i % 2); });
    const odds = rollArray.filter(function (v, i) { return !(i % 2); });
    const min = 1;
    const resArr = [];
    const rollem = (evens, odds) => {
      for (let i = 0; i <= evens.length - 1; i++) {
        const result = getRandomInt(min, evens[i], odds[i]);
        console.log(`Rolling ${odds[i]}d${evens[i]}... ${result}`);
        resArr.push(result);
      }
    }
    rollem(evens, odds);
    return resArr;
  }
  const extractTable = (item) => {
    const firstIndex = item.indexOf('Table') + 6;
    const first = item[firstIndex]
    const lastIndex = item.lastIndexOf('Table') + 6;
    const last = item[lastIndex];
    if (item === '-') {
      return '-';
    } else if (lastIndex > firstIndex) {
      return [...first, ...last];
    } else {
      return first;
    }
  }
  const extractCrItems = (cr) => {
    return hoardTreasureTables[prependItemString(cr)];
  }

  // init array to store roll results
  let result = false;
  // generate 1..N array
  const iterArray = (i) => [...Array(i).keys()]
  // 
  const rollXdY = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function xdy([x, y, z = 1]) {
	  let resultArray = [];
    let ia = iterArray(x);
    ia.forEach(iterArray => resultArray.push( getRandomInt(x, y, z)));
    result = resultArray;
    return result;
  }

  function extractAndRoll(cr) {
    const rollArray = extractCoinRolls(cr);
    console.log(rollArray);
    const r = rollArray.rolls;
    const m = rollArray.multipliers;
    const result = rollDice(r);
    console.log(result);
    const res0 = result[0]*m[0];
    const res1 = result[1]*m[1];
    const res2 = result[2]*m[2];
    const res3 = result[3]*m[3];
    const res4 = result[4]*m[4];
    const tempResult = [res0, res1, res2, res3, res4];
    const finalResult = tempResult.filter( value => !Number.isNaN(value));
    alert(`You rolled: 
    ${finalResult}`);
  }

  let rollResult = 0;
  function coinTableClick(event) {
    const td = event.target.closest('td');
		if (td) {
      const tdContent = td.innerHTML;
      const lowerVals = tdContent.toLowerCase();
      const rollSplit = (arr) => arr.split(' x ');
      const split = rollSplit(lowerVals);
      // 1d6 * 100 => [1, 6, 100]
      const rollArr = [...split[0].split('d'), split[1].substring(0, split[1].indexOf('(')-1)]
      const numArr = rollArr.map(el => Number(el));
      console.log(numArr);
      const min = numArr[0];
      const max = numArr[0] * numArr[1];
      const multiplier = numArr[2];
      rollResult = rollXdY(min, max) * multiplier;
      rollModal = true;
    }
  }

  $: selectedCoins = (selectedCR) ? extractCrCoins(selectedCR) : false;
  $: selectedCoinKeys = (selectedCR) ? extractCrCoinsKeys(selectedCR) : false;
  $: selectedItems = (selectedCR) ? extractCrItems(selectedCR) : false;
  $: selectedItemVals = (selectedCR) ? extractItemVals(selectedCR) : false;
</script>

<style>
  #page-ui-wrapper {
    grid-template-columns: 0.05fr 3fr 0.5fr 6fr 0.05fr;
    ;
    font-family: 'Fira Sans';
    font-weight: 100;
    line-height: 2;
    color: #00ffc4;
    display: grid;
    grid-template-rows: auto 0.5fr 0.5fr 0.5fr;
  }

  #selection-wrapper {
    grid-column: 2;
    grid-row: 1;
    background-color: #090c16;
    font-family: 'Overpass Mono', monospace;
    font-size: calc(10px + 1vw);
    font-weight: 100;
    width: -webkit-fill-available;
    justify-self: center;
  }

  #tableDiv {
    grid-column: 4;
    grid-row: 1;
    background-color: #090c16;
    width: -webkit-fill-available;
    display: grid;
    grid-template-rows: 1fr 1fr 4fr 1fr 10fr 1fr;
    grid-template-columns: 1fr 20fr 1fr;
    max-height: 80vh;
  }

  .table-wrapper {
    background-color: #090c16;
    text-align: -webkit-center;
  }

  .coin-table-wrapper {
    grid-row: 3;
    grid-column: 2;
  }

  .coin-table {
    width: 100%;
  }

  .item-table-wrapper {
    grid-row: 5;
    grid-column: 2;
    width: 100%;
    max-height: 40vh;
    overflow-y: scroll;
    padding: 0;
    margin: 0 auto;
    scroll-behavior: smooth;
  }

  #typeWrapper {
    grid-row: 1;
  }

  #CRWrapper {
    display: grid;
    grid-template-rows: auto 1fr 3fr 1fr 0.5fr auto;
    grid-template-columns: 0.5fr 1fr auto 1fr 0.5fr;
    max-height: 80vh;
  }

  .section-title {
    font-family: Space Mono;
    font-weight: 100;
    font-size: 2.35rem;
    border: 1px solid #00ffc4;
    border-collapse: collapse;
    padding: 6px;
    color: #00ffc4;
    background: #060909;
    text-align: center;
    margin: 0;
    height: fit-content;
    grid-row: 1;
    grid-column: 1/-1;
    grid-template-rows: 1fr 0.1fr auto 0.1fr auto;
  }

  .input-wrapper {
    grid-row: 3;
    background-color: #090c16;
    display: grid;
    grid-template-rows: auto 10fr;
    grid-column: 3/4;
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
    border: 1px solid #4a4b4f;
    border-collapse: collapse;
    padding: 1.5rem 1.5rem 1.5rem 3rem;
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
    grid-row: 5;
    cursor: pointer;
    margin: 0 auto;
    grid-column: 2/-2;
    font-family: 'Share Tech Mono';
    font-size: calc(20px + 1vw);
    background-color: #561386;
    color: #fff;
    border: 2px solid #fff;
    width: 50%;
    margin: 0 auto;
  }

  .navBtn:hover {
    border: 2px solid #c78fef;
    color: #c78fef;
    background: #00000000;
  }

  .navBtn-back {
    grid-row: 5;
    cursor: pointer;
    margin: 0 auto;
    grid-column: 2/5;
    font-family: 'Share Tech Mono';
    font-size: calc(20px + 1vw);
    background-color: #561386;
    color: #fff;
    border: 2px solid #fff;
    width: 50vw;
    margin: 2rem auto 2rem auto;
  }

  .navBtn-back:hover {
    border: 2px solid #c78fef;
    color: #c78fef;
    background: #00000000;
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
    transform: scale3d(2.5, 2, 1) rotate(180deg);
    transform-origin: center;
  }

  #backToPageload {
    margin: 0 auto;
    text-align: center;
  }

  .table-title {
    font-family: 'Fira Sans';
    font-weight: 100;
    font-size: 2rem;
    border: 1px solid #c78fef;
    border-collapse: collapse;
    color: #c78fef;
    background: #060909;
    text-align: center;
    line-height: 1.8;
    cursor: pointer;
  }

  .table-title:hover {
    background: repeating-linear-gradient(rebeccapurple, transparent 100px);
    color: #fff;
    font-weight: 400;
  }

  table {
    font-weight: 100;
    color: #1a1c23;
    background-color: #efeff6;
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }

  tr {
    height: 2.4rem;
  }

  thead {
    font-size: 1.5rem;
    font-family: 'Fira Sans Extra Condensed';
    background: #0d0d0f;
    border: 1px solid #fff;
    border-top: none;
  }

  tbody {
    font-size: 0.9rem;
    font-weight: 100;
    border: 1px solid #fff;
    font-family: 'IBM Plex Sans Condensed';
  }

  th {
    padding: 5px 1px 5px 10px;
    background: #2d2f3a;
    color: #fff;
    border: 0.5px solid #8a8d92;
    border-top: none;
    font-family: 'Share Tech Mono';
    font-size: 1rem;
    text-align: left;
    top: 0;
    position: sticky;
  }

  .item-header-1 {
    width: 5%;
  }

  .item-header-2 {
    width: 5%;
  }

  .item-header-3 {
    width: 5%;
  }

  .item-header-4 {
    width: 5%;
  }

  .item-header-5 {
    width: 23%;
  }

  .item-header-6 {
    width: auto;
  }

  tr:nth-child(even) {
    background: #9a9da733;
  }

  td {
    padding: 2px 4px 2px 4px;
    border: 0.5px solid #666;
    border-collapse: collapse;
    text-align: left;
    cursor: pointer;
  }
  
  td:hover {
    background: #ff0076;
    color: #fff;
  }

  td:nth-child(1) {
    text-align: center;
  }

  td:nth-child(2) {
    text-align: center;
  }

  td:nth-child(3) {
    text-align: center;
  }

  td:nth-child(4) {
    text-align: center;
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

{#if rollModal}
  <div class="alert-dialog">
    You rolled:
    <div id="result-div">{rollResult}</div>
    <button id="alert-close" on:click="{() => closeRollModal()}">X</button>
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
      <button id="fwdToRollBtn" 
              class="navBtn" 
              on:click="{() => proceedToTableSelection()}">
        Next  
      </button>
    </div>
  </div>
  
  <div id="tableDiv">
    <p id="typeTitle" class="section-title">Selection</p>
    {#if selectedCR}
      <div class="table-wrapper coin-table-wrapper">
        <div class="table-title" on:click="{() => extractAndRoll(selectedCR)}">
          Coins (CR{(selectedCR)})
        </div>
      <div class="table-content">
        {#if selectedCoins}
          <table class=coin-table>
            <thead>
              {#each selectedCoinKeys as keys}
                <th>{keys}</th>
              {/each}
            </thead>
            <tbody class="coin-tbody">
              <tr on:click={coinTableClick}>
                {#each selectedCoins as coins}
                  <td>{coins}</td>
                {/each}
              </tr>
            </tbody>
          </table>
        {/if}
      </div>
    </div>
    {/if}

    {#if selectedCR}
    <div class="table-wrapper item-table-wrapper">
        <div class="table-title">
          Treasure (CR{(selectedCR)})
        </div>
      <div class="table-content">
          <table class="item-table">
            <thead>
              <th class="item-header-1">low</th>
              <th class="item-header-2">high</th>
              <th class="item-header-3">rolls</th>
              <th class="item-header-4">table</th>
              <th class="item-header-5">precious_objects</th>
              <th class="item-header-6">magic_items</th>
            </thead>
            <tbody class="item-tbody">
              {#each selectedItemVals as items}
                <tr>
                  <td>{getLow(items[0])}</td>
                  <td>{getHigh(items[0])}</td>
                  <td>{extractItemRolls(items[2])}</td>
                  <td>{extractTable(items[2])}</td>
                  <td>{items[1]}</td>
                  <td>{items[2]}</td>
                </tr>
              {/each}
            </tbody>
          </table>
      </div>
    </div>
    {/if}
  </div>
</div>
{/if}

{#if rollForm}
<div class="rollFormAppDiv">
  <ItemTable />
</div>

<div id="backToPageload">
  <button id="backToPageloadBtn" class="navBtn-back" on:click="{() => backToPageloadUI()}">
    Back
  </button>
</div>
{/if}