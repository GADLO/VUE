<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 18" :aria-labelledby="iconName"
        role="icon">
        <title :id="iconName" lang="cn">{{ iconName }} icon</title>
        <g :fill="iconColor">
            <slot />
        </g>
    </svg>
</template>

<script >
export default {
    name: 'IconBase',
    props: {
        iconName: {
            type: String,
            default: 'box'
        },
        width: {
            type: [String, Number],
            default: 18
        },
        height: {
            type: [String, Number],
            default: 18
        },
        iconColor: {
            type: String,
            default: 'currentColor'
        }
    },
    setup() {

    }
}
</script>

<style lang='scss' scoped>
svg {
    display: flex;
    vertical-align: baseline;
    justify-content: center;
    align-items: center;
}
</style>