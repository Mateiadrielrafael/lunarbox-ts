import { VNodeTemplate } from './types/VNodeTemplate'
import merge from 'deepmerge'
import { DeepPartial } from 'utility-types'

/**
 * Sane defaults for instantiating nodes.
 */
export const defaultVNodeTemplate: VNodeTemplate = {
    material: {
        stroke: {
            active: '#76FF02',
            normal: '#3FC4FF'
        },
        fill: '#3C3C3C',
        opacity: 0.7,
        pinLabelFIll: `rgba(200,200,200,0.7)`
    },
    label: {
        text: 'Add',
        size: 30,
        position: 'inside',
        fill: 'white',
        description: 'Take the inputs and output their sum.'
    },
    shape: {
        borderRadius: 2,
        strokeWidth: 5,
        pinRadius: 10
    },
    pins: {
        labels: false,
        inputs: [
            {
                label: 'first number'
            },
            {
                label: 'second number'
            }
        ],
        outputs: [
            {
                label: 'result'
            }
        ]
    }
}

export const topLeftTemplate: DeepPartial<VNodeTemplate> = {
    label: {
        position: 'top-left',
        size: 15,
        fill: 'rgba(180,180,180,0.6)'
    }
}

const topCenterPartial: DeepPartial<VNodeTemplate> = {
    label: {
        position: 'top-center'
    }
}

const bottomCenterPartial: DeepPartial<VNodeTemplate> = {
    label: {
        position: 'bottom-center'
    }
}

export const topCenterTemplate = merge(topLeftTemplate, topCenterPartial)
export const bottomCenterTemplate = merge(topLeftTemplate, bottomCenterPartial)
