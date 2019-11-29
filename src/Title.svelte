<script>
	import { onMount } from 'svelte';
	
	let visible = false;
	
	const makeTitleVisible = () => {
		visible = true;
	}
	
	onMount(async () => {
		console.log('making visible');
		makeTitleVisible();
	})
		
	function typewriter(node, { speed = 50 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === 3
		);

		if (!valid) {
			throw new Error(`Errrooorrr`) 
		}

		const text = node.textContent;
		const duration = text.length * speed;

		return {
			duration,
			tick: t => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
	
	const users = 'Nerds';
	const screwYouGuys = '\_(:/)_/';
</script>

<style>
	h1 {
		color: #c78fef;
    font-family: 'Share Tech Mono';
    font-weight: 100;
    font-size: calc(20px + 2vw);
    letter-spacing: -3px;
    background-color: #000;
    width: 100vw;
    transform: translate3d(-3vw, -1vh, 0);
    padding: 2vh 0 2vh 3vw;
    margin: 0 0 2vh 0;
	}
</style>

{#if visible}
	<h1 id="title-div" in:typewriter>
			Here's your damn loot roller, {users}!
	</h1>
{/if}