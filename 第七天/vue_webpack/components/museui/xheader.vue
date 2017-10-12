<template>
	<mu-appbar title="Title">
		<mu-icon-button @click="setLeftPopup" :icon="leftPopup?'close':'menu'" slot="left" />
		<mu-flat-button label="expand_more" slot="right" />
		<mu-icon-button icon="expand_more" slot="right" />
	</mu-appbar>
</template>
<script>
	export default {
		methods: {
			setLeftPopup() {
				console.log(1)
				this.$store.state.leftPopup = !this.$store.state.leftPopup
			}
		},
		computed:{
			leftPopup(){
				return this.$store.state.leftPopup
			}
		}
	}
</script>
<style lang="less">
	.appbar-search-field {
		color: #FFF;
		margin-bottom: 0;
		&.focus-state {
			color: #FFF;
		}
		.mu-text-field-hint {
			color: fade(#FFF, 54%);
		}
		.mu-text-field-input {
			color: #FFF;
		}
		.mu-text-field-focus-line {
			background-color: #FFF;
		}
	}
</style>