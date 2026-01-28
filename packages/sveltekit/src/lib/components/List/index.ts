import { ColumnType, OrderDirection } from "$lib/enums";
import type { Music } from "@sanity-types";
import { arrayToString } from "$lib/modules/utils";
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
    title: "Year",
    columnType: ColumnType.Year,
  },
  {
    title: "Label",
    columnType: ColumnType.Label,
  },
  {
    title: "Genre",
    columnType: ColumnType.Genre,
  },
];

export const SORTABLE_COLUMNS = [
  ColumnType.Title,
  ColumnType.Artist,
  ColumnType.Label,
  ColumnType.Genre,
];

// - - - - - - -

export const baseList = writable([] as Music[]);
export const orderColumn = writable(ColumnType.Title);
export const orderDirection = writable(OrderDirection.Descending);
export const searchTerm = writable("");

// - - - - - - -

export const orderedList = derived(
  [baseList, orderColumn, orderDirection, searchTerm],
  ([$baseList, $orderColumn, $orderDirection, $searchTerm]) => {
    const lowerCaseSearchTerm = $searchTerm.toLowerCase();

    // Filtering
    let filteredList = $baseList.filter((item) => {
      // Check if search term is included in any of the fields
      return (
        (item.title &&
          item.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
        arrayToString(item.artist)
          .toLowerCase()
          .includes(lowerCaseSearchTerm) ||
        (item.label &&
          item.label.toLowerCase().includes(lowerCaseSearchTerm)) ||
        arrayToString(item.tags).toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    // Sorting
    filteredList.sort((a, b) => {
      let valueA, valueB;
      switch ($orderColumn) {
        case ColumnType.Title:
          valueA = a.title || "";
          valueB = b.title || "";
          break;
        case ColumnType.Artist:
          valueA = arrayToString(a.artist) || "";
          valueB = arrayToString(b.artist) || "";
          break;
        case ColumnType.Year:
          valueA = Number(a.firstIssueYear) || 0; // Assuming 'year' is the correct field
          valueB = Number(b.firstIssueYear) || 0;
          break;
        case ColumnType.Label:
          valueA = a.label || "";
          valueB = b.label || "";
          break;
        case ColumnType.Genre:
          valueA = arrayToString(a.tags) || "";
          valueB = arrayToString(b.tags) || "";
          break;
        default:
          valueA = a.title || "";
          valueB = b.title || "";
      }

      if ($orderColumn === ColumnType.Year) {
        // Numeric comparison for Year
        return $orderDirection === OrderDirection.Ascending
          ? Number(valueA) - Number(valueB)
          : Number(valueB) - Number(valueA);
      } else {
        // String comparison for other columns
        return $orderDirection === OrderDirection.Ascending
          ? String(valueA).localeCompare(String(valueB))
          : String(valueB).localeCompare(String(valueA));
      }
    });

    return filteredList;
  },
);
