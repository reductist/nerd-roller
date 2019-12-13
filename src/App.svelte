<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Fira+Sans|Fira+Sans+Extra+Condensed|IBM+Plex+Mono|IBM+Plex+Sans+Condensed|Inconsolata|Overpass+Mono|Share+Tech+Mono|Space+Mono&display=swap" rel="stylesheet">
</svelte:head>
<script>
	import Title from './Title.svelte'
	import PageUI from './PageUI.svelte'
</script>

<style>
	:root {
    background:#3d3f46;
    margin: 0 auto;
    overflow-x: hidden;
    width: 95%;
	}
	#wrapper {
		font-family: 'Share Tech Mono', sans-serif;
		font-size: 14px;
	}
</style>

<div id='wrapper'>
	
	<Title></Title>

	<PageUI />
	
</div>