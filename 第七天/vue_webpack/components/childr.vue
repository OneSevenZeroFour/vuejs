<template>
<!--jade ejs-->
	<div>
		<p>{{name}}</p>
	</div>
</template>

<script>
//ts
	export default {
		data(){
			return {
				name:"这个是子组件"
			}
		}
	}
</script>

<style scoped lang="less">
	
</style>