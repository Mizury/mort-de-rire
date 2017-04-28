_.slice(array, [starting index number], [ending index number]); //the ending number does not get included if you want the end of the array do [array.length]

_.filter(array, {objects});//similar to find
_.find(array, {objects}); //could be good search tools for items, objects is like {sell: 2, type: 'weapon'}

_.flatten(array); //have to use this after the push from splice as it's two arrays deep.

_.orderBy(array, ['name', 'buy'], ['asc', 'desc']); // imo better way to sort. 