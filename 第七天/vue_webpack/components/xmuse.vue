<template>
	<div>
		<xheader></xheader>
		<xlist></xlist>
		<xfooter></xfooter>
		<xpopup></xpopup>
	</div>
</template>

<script>
	import xheader from "./museui/xheader.vue"
	import xlist from "./museui/xlist.vue"
	import xfooter from "./museui/xfooter.vue"
	import xpopup from "./museui/xpopup.vue"
	export default {
		components: {
			xheader,
			xfooter,
			xlist,
			xpopup
		}
	}
</script>

<style>

</style>