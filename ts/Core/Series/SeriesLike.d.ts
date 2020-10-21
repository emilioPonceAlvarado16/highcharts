/* *
 *
 *  (c) 2010-2020 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type AnimationOptionsObject from '../Animation/AnimationOptionsObject';
import type PointLike from './PointLike';
import type {
    PointOptions,
    PointShortOptions
} from './PointOptions';
import type SVGElement from '../Renderer/SVG/SVGElement';

/* *
 *
 *  Declarations
 *
 * */

/**
 * Helper interface for series types to add optional members to all series
 * instances.
 *
 * Use the `declare module 'Types'` pattern to overload the interface in this
 * definition file.
 */
export interface SeriesLike {
    colorIndex?: number;
    finishedAnimating?: boolean;
    index?: number;
    isDirty?: boolean;
    group?: SVGElement;
    linkedParent?: SeriesLike;
    linkedSeries: Array<SeriesLike>;
    markerGroup?: SVGElement;
    opacity?: number;
    options: SeriesLikeOptions;
    points: Array<PointLike>;
    userOptions: DeepPartial<SeriesLikeOptions>;
    drawGraph(): void;
    render(): void;
    translate(): void;
    update(options: DeepPartial<SeriesLikeOptions>): void;
}

/**
 * Helper interface for series types to add options to all series options.
 *
 * Use the `declare module 'Types'` pattern to overload the interface in this
 * definition file.
 */
export interface SeriesLikeOptions /* @todo */ extends Highcharts.SeriesOptions {
    animation?: (boolean|DeepPartial<AnimationOptionsObject>);
    data?: Array<(PointOptions|PointShortOptions)>;
    dataSorting?: Highcharts.DataSortingOptionsObject; // cartasian series
    index?: number;
    /** @private */
    isInternal?: boolean;
    pointStart?: number;
    type?: string;
}

/* *
 *
 *  Export
 *
 * */

export default SeriesLike;
