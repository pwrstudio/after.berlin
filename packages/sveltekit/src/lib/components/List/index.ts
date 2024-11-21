import { ColumnType, OrderDirection } from "$lib/enums"
import type { Music } from "@sanity-types"
import { writable, derived } from "svelte/store";

// - - - - - - -

export const columns = [
    {
        title: "Title",
        columnType: ColumnType.Title,
    },
    {
        title: "Artist",
        columnType: ColumnType.Artist,
    },
    {
        title: "Label",
        columnType: ColumnType.Label,
    },
    {
        title: "Cat.#",
        columnType: ColumnType.CatalogueNumber,
    },
]

export const SORTABLE_COLUMNS = [
    ColumnType.Title,
    ColumnType.Artist,
    ColumnType.Label,
    ColumnType.CatalogueNumber
]

// - - - - - - -

export const baseList = writable([] as Music[])
export const orderColumn = writable(ColumnType.Title)
export const orderDirection = writable(OrderDirection.Descending)
export const searchTerm = writable("")

// - - - - - - -

export const orderedList = derived(
    [baseList, orderColumn, orderDirection, searchTerm],
    ([$baseList, $orderColumn, $orderDirection, $searchTerm]) => {
        const lowerCaseSearchTerm = $searchTerm.toLowerCase();

        // Filtering
        let filteredList = $baseList.filter(item => {
            // Check if search term is included in any of the fields
            return (
                (item.title && item.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (item.interpreter && item.interpreter.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (item.composer && item.composer.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (item.label && item.label.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (item.catalogueNumber && item.catalogueNumber.toLowerCase().includes(lowerCaseSearchTerm))
            );
        });

        // Sorting
        filteredList.sort((a, b) => {
            let valueA, valueB;
            switch ($orderColumn) {
                case ColumnType.Title:
                    valueA = a.title || '';
                    valueB = b.title || '';
                    break;
                case ColumnType.Artist:
                    valueA = a.title || '';
                    valueB = b.title || '';
                    break;
                case ColumnType.Date:
                    valueA = a.date || '';
                    valueB = b.date || '';
                    break;
                case ColumnType.Label:
                    valueA = a.label || '';
                    valueB = b.label || '';
                    break;
                case ColumnType.CatalogueNumber:
                    valueA = a.catalogNumber || '';
                    valueB = b.catalogNumber || '';
                    break;
                // Add cases for other sortable columns if needed
                default:
                    valueA = a.title || '';
                    valueB = b.title || '';
            }

            if ($orderDirection === OrderDirection.Ascending) {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });

        return filteredList;
    }
);