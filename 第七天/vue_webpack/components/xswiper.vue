<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide v-for="i in imgs" :key="i.id">
			<img :src="i.src" />
		</swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		data() {
			return {
				imgs: [{
					id: 1,
					src: require("../img/1.jpg")
				}, {
					id: 2,
					src: require("../img/2.png")
				}],
				swiperOption: {
					effect:"cube",
					loop:true,
					autoplay: 5000
				}
			}
		}
	}
</script>
<style scoped>
	img {
		width: 100%;
		height: 200px;
	}
</style>