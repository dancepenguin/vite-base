
export function px2rem(px: string, isWidth: boolean = true):string {
    if (/%/ig.test(px)) { // 有百分号%，特殊处理，表述pc是一个有百分号的数，比如：90%
        return px
    } else {
        if (isWidth) {
            return (parseFloat(px) / 1920) * 100 + 'vw'
        } else {
            return (parseFloat(px) / 1080) * 100 + 'vh'
        }

    }
}