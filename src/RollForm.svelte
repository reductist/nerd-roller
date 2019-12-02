<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let rollInputValue = ' ';
  let tableIdInputValue = '';
  let result = false;
  
  let tableOptions = [
    { id: 'A', text: `Table A` },
    { id: 'B', text: `Table B` },
    { id: 'C', text: `Table C` },
    { id: 'D', text: `Table D` },
    { id: 'E', text: `Table E` },
    { id: 'F', text: `Table F` },
    { id: 'G', text: `Table G` },
    { id: 'H', text: `Table H` },
    { id: 'I', text: `Table I` },
  ];

  export let selected;
  
  let selectionMade = false;
  let answer = '';
  
  function handleChoice() {
    selectionMade = selected.slice(6,7);
  }
  
  // generate 1..N array
  const iterArray = (i) => [...Array(i).keys()]
  const roll100 = () => Math.round(Math.random() * 100);
  
  function d100(num) {
    let resultArray = [];
    let ia = iterArray(num);
    ia.forEach(iterArray => resultArray.push( roll100() ));
    result = resultArray;
  }
  
</script>

<style>
  #wrapper {
    margin: 0 auto;
    text-align: center;
  }
  .inputField {
    font-family: 'Fira Code';
    font-size: 1.2rem;
    border: 1px solid #00ffc4;
    border-radius: 10px;
    background: #32373b;
    color: #edfafd;
    margin: 8px 0 8px 0;
    margin-left: 1rem;
    text-align-last: center;
    text-indent: 4px;
    height: 50px;
    width: 125px;
    transition: all 350ms;
    transition-timing-function: ease-out;
  }
  .inputField:focus,
  .inputField:not(:placeholder-shown),
  .inputField:hover {
    font-weight: 900;
    font-size: 1.2rem;
    border-radius: 2em;
    border: 1.5px solid #00eeff;
    box-shadow: 0 0 6px 6px #131d1b;
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #12141a;
    outline: none;
    background: #f3f0ff;
  }
  #tableIdInput {
    font-family: 'Fira Code';
    font-size: 1.2rem;
    border: 1px solid #00ffc4;
    border-radius: 10px;
    background: #32373b;
    color: #edfafd;
    margin: 8px 0 8px 0;
    margin-left: 1rem;
    text-align-last: center;
    text-indent: 4px;
    height: 50px;
    width: 250px;
    transition: all 350ms;
    transition-timing-function: ease-out;
  }
  #tableIdInput:focus,
  #tableIdInput:focus-within,
  #tableIdInput:hover {
    font-weight: 900;
    font-size: 1.2rem;
    border-radius: 2em;
    border: 1.5px solid #00eeff;
    box-shadow: 0 0 6px 6px #131d1b;
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #12141a;
    outline: none;
    background: #f3f0ff;
  }
  #tableIdInput option {
    font-weight: 500;
    font-size: 1rem;
    background: #131d1b;
    color: #deeaef;
    margin-left: 6em;
  }
  #rollBtn {
    display: block;
    width: 200px;
    font-family: 'Overpass Mono';
    font-weight: 900;
    font-size: 1rem;
    margin: 0 auto 0 auto;
    background: #33194d;
    color: #fff;
    padding-top: 8px;
    cursor: pointer;
    border: 1px solid #dcdedf;
    border-radius: 6px;
    grid-column: 1/-1;
    grid-row: 3;
    transition: all 200ms;
  }
  #rollBtn:hover {
    background: #000;
    font-weight: 900;
    color: #da106e;
    border: 1px solid #da106e;
    box-shadow: none;
  }
  #inputWrapper  {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 1fr 1fr 0.5fr;
    background: #090c16;
    border-radius: 6px;
    padding: 1em;
    border: 1px solid #00ffc4;
  }
  #rollLabel {
    grid-column: 1;
    grid-row: 1;
    text-align: start;
    align-self: center;
    font-family: 'IBM Plex Mono', 'Fira Code', monospace;
    font-size: calc(12px + 1vw);
    color: #00ffc4;
    border-collapse: collapse;
    padding: 10px;
  }
  #rollWrap {
    display: flex;
    grid-column: 2;
    grid-row: 1;
    text-align: left;
    border-left: 1px solid #fff;
    align-self: center;
  }
  #tableLabel {
    text-align: start;
    grid-column: 1;
    align-self: center;
    font-size: calc(12px + 1vw);
    font-family: 'IBM Plex Mono', 'Fira Code', monospace;
    color: #00ffc4;
    padding: 10px;
  }
  #tableWrap {
    grid-column: 2;
    text-align: left;
    text-align: left;
    border-left: 1px solid #fff;
    align-self: center;
  }
  #rollInputLabelWrapper {
    display: grid;
    grid-column: 1 / span 2;
    grid-row: 1;
    grid-template-columns: 1fr 1.8fr;
    border: 1px solid #fff;
    border-collapse: collapse;
    grid-gap: 10px;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  #tableInputLabelWrapper {
    display: grid;
    grid-column: 1/ span 2;
    grid-row: 2;
    grid-template-columns: 1fr 1.8fr;
    border: 1px solid #fff;
    border-collapse: collapse;
    grid-gap: 10px;
  }
  #rollCountSlider {
    align-self: center;
    margin: 0 1em 0 1em;
    width: 50%;
  }
  .dialog-span {
    align-self: center;
    margin-left: 8px;
  }
  #dialog-span-roll {
    align-self: center;
    grid-column: 2;
    grid-row: 2;
  }
  #rollInputvalue {
    align-self: center;
    grid-column: 3;
    grid-row: 2;
    height: fit-content;
    width: fit-content;
    min-height: 40px;
    min-width: 20px;
    display: flex;
  }
  #dialog-span-roll-if {
    align-self: center;
    grid-column: 4;
    grid-row: 2;
  }
  #dialog-span-bridge {
    align-self: center;
    grid-column: 3;
    grid-row: 3;
    color: #ff004e;
    margin: 10px 0;
    font-style: italic;
  }
  #dialog-span-table-id {
    align-self: center;
    grid-column: 2;
    grid-row: 4;
  }
  #dialog-span-table-value {
    align-self: center;
    grid-column: 3;
    grid-row: 4;
    height: fit-content;
    width: fit-content;
    min-height: 40px;
    min-width: 20px;
  }
  #outputWrapper {
    position: relative;
    width: 90%;
    margin: 0 auto;
  }
  .rollDialog {
    background: #090c16;
    z-index: 0;
    padding: 4px;
    width: 50vw;
    margin: 1em auto 1em auto;
    border: 1px solid #00ffc4;
    font-size: calc(12px + 1vw);
    color: #00ffc4;
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    grid-template-rows: 0.3fr 1fr 0.6fr 1fr 0.3fr;
    place-items: center;
  }
  .resultDialog {
    font-size: calc(12px + 1vw);
    background: #000;
    margin: 1em auto;
    width: fit-content;
    padding: 2rem 1rem 2.1rem 1rem;
    border: 1px solid #00ffc4;
    color: #00ffc4;
  }
  .varText {
    font-family: 'IBM Plex Mono', 'Fira Code', monospace;
    font-weight: 300;
    font-size: 30px;
    background: #000;
    margin: 10px auto 0 auto;
    padding: 6px 16px 6px 16px;
    border-radius: 12px;
    border: 1.5px solid #da106e;
    box-shadow: 0 0 12px 2px #da106e;
    color: #ff004e;
    text-rendering: geometricPrecision;
    text-transform: uppercase;
    animation: box-neon 1s ease-in-out infinite alternate;
    width: fit-content;
    place-self: center;
    word-wrap: break-word;
  }

  @keyframes box-neon {
    from { box-shadow: 0 0 1px #ff0077, 0 0 1px #ff0077, 0 0 1px #ff0077, 0 0 1px #ff0077; }

    to { box-shadow: 0 0 2px #ff0077, 0 0 4px #ff2288, 0 0 6px #ff55aa, 0 0 8px #ffaaff; }
  }
</style>

<div id='wrapper'>
  <div id='inputWrapper'>
    <label id='rollInputLabelWrapper'>
      <span id="rollLabel">How many rolls?</span>
      <div id="rollWrap">
        <input id="rollCountInput" placeholder="Rolls?" class="inputField"
type=number bind:value={rollInputValue} min=1 max=10>
        <input id="rollCountSlider" class="inputSlider" type=range
bind:value={rollInputValue} min=1 max=10>
      </div>
    </label>

    <label id='tableInputLabelWrapper'>
      <span id="tableLabel">Which table?</span>
      <div id="tableWrap">
        <select id="tableIdInput" name="tableSelect" bind:value={selected} on:change="{() => handleChoice}">
          {#each tableOptions as option}
            <option value={option}>
              {option.text}
            </option>
          {/each}
        </select>
      </div>
    </label>
    <button id="rollBtn" on:click="{() => d100(rollInputValue)}">
      Roll
    </button>
  </div>

  <div id="outputWrapper">
  <p class="rollDialog">

    {#if rollInputValue >= 1}
      <span id="dialog-span-roll" class="dialog-span">
        Rolling
      </span>
        <span id="rollInputvalue" class='varText'>
          {rollInputValue}
        </span>
      {#if rollInputValue > 1}
        <span id="dialog-span-roll-if"> times </span>
      {:else}
        <span id="dialog-span-roll-if"> time </span>
      {/if}
      <span id="dialog-span-bridge" class="dialog-span">
        on
      </span>
    {/if}
    
    <span id="dialog-span-table-id" class="dialog-span">
      table
    </span>
    <span id="dialog-span-table-value" class='varText'>
      {selected ? selected.id : ''}
    </span> 
  </p>
    
    {#if result}
    <div class="resultDialog">You rolled: 
      <p class="varText">{result}</p>
    </div>
    {/if}
  </div>
</div>