<script>
  import RollForm from './RollForm.svelte'
  import { allItemTables } from './itemData.js'
  import ItemTable from './ItemTable.svelte'

  // function to exclude any missing data
  let valueCheck = (str) => (str !== '-') ? true : false;

  // slice a provided table.data[0][0] for the first 2 and last 2 characters, and cast the result to an int.
  // ex: getLow(tableA.data[0][0])  //95
  let getLow = (str) => (valueCheck(str)) ? Number(str.slice(0, 2)) : '';
  let getHigh = (str) => (valueCheck(str)) ? Number(str.slice(3, 5)) : '';
  
  // initialize empty variable to bind user table selection input
  let selectionValue;
  
  // helper functions to extract table letter identifier (last letter in string, ex; table _A_)
  const extractTableLetter = (str) => str.charAt(str.length-1)
  const prependObjString = (tblLetter) => `itemTable${tblLetter}`;
  
  // return table variable based on table string identifier
  function getTable(tableName) {
    return allItemTables[prependObjString(extractTableLetter(tableName))];
  }
  
  // if extant,  bind table data reactively to viewState variable so input changes are mirrored in the DOM
  $: viewState = (selectionValue) ? Object.entries(selectionValue)[1][1] : false;
</script>
  
<style>
  .rollFormAppDiv {
    display: block;
    width: 100%;
    color: #cfd4f1;
    font-family: 'Overpass Mono';
    place-content: center;
  }
</style>

<div class="rollFormAppDiv">
  <RollForm bind:selected={selectionValue} />
</div>

<div id="tableTitle">
  {viewState}
</div>

{#if viewState}
  <ItemTable bind:selected={selectionValue} />
{/if}