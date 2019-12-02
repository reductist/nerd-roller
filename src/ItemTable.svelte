<script>
    import RollForm from './RollForm.svelte'
    import { allItemTables } from './itemData.js'
  
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
      #tableTitle {
        font-family: 'Fira Code';
        font-weight: 100;
        font-size: 1.5rem;
        border: 1px solid #00ffc4;
        border-collapse: collapse;
        padding: 6px;
        color: #00ffc4;
        background: #060909;
        text-align: center;
      }
      table {
        font-family: 'Overpass Mono';
        font-weight: 100;
        color: #1a1c23;
        background-color: #efeff6;
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin-bottom: 4rem;
      }
      th {
        padding-left: 6px;
        padding-right: 6px;
        padding-top: 12px;
        padding-bottom: 12px;
        background: #2d2f3a;
        color: #fff;
        box-shadow: 0px 2px 6px 0px #272D2D;
        border: 1px solid #676d6d;
        font-family: 'Fira Code';
        font-size: 1rem;
      }
      th:nth-child(1), th:nth-child(2) {
        width: 25%;
        text-align: right;
      }
      th:nth-child(3) {
        width: 50%;
        text-align: left;
      }
      tr:nth-child(even) {
        background: #9a9da733;
      }
      td {
        font-size: 0.8rem;
        padding: 6px 10px 6px 15px;
        border: 1px solid #fff;
        border-collapse: collapse;
      }
      td:nth-child(1), td:nth-child(2) {
        text-align: right;
        padding-right: 15px;
      }
      #item-table-header {
        position: sticky;
        top: 0;
        display: inherit;
        flex-flow: row;
        flex-direction: row;
        width: 91vw;
      }
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
      <table id="item-table">
        <thead id="item-table-header">
          <th>range_low</th>
          <th>range_high</th>
          <th>item</th>
        </thead>
        <tbody>
        {#each getTable(viewState) as item, i}
          <tr>
            <td>
              {#if getLow(item.d100) === 0 && getHigh(item.d100) === 0}
                100
              {:else if getLow(item.d100) === 0}
                {getHigh(item.d100)}
              {:else if getLow(item.d100) === 'NaN'}
                -
              {:else}
                {getLow(item.d100)}
              {/if}
            </td>
            <td>
              {#if getLow(item.d100) === 0 && getHigh(item.d100) === 0}
                100
              {:else if getHigh(item.d100) === 0}
                {getLow(item.d100)}
              {:else if getHigh(item.d100) === 'NaN'}
                -
              {:else}
                {getHigh(item.d100)}
              {/if}
            </td>
            <td>{item['Magic Item']}</td>
          </tr>
        {/each}
        </tbody>
      </table>
    {/if}
