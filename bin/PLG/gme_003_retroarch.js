//////////////////////////////////////////////////////////////////////////
///*				   		 ENCLOSE START							  *///
//////////////////////////////////////////////////////////////////////////

export const Plugin = (() => { 	// DO NOT REMOVE, Encloses plugin on a local scope //

//////////////////////////////////////////////////////////////////////////
///*				   		CUSTOM FUNCTIONS						  *///
//////////////////////////////////////////////////////////////////////////

function getELFPath()
{
	// Default to Path on APPS folder.
	let elfPath = `${System.boot_path}/APPS/retroarch/raboot.elf`;
	
	// Scan all possible Open PS2 Loader Paths
	
	// PENDING //
	
	return { Path: elfPath, Args: [] }
}

//////////////////////////////////////////////////////////////////////////
///*				   		MAIN PLUGIN DATA						  *///
///																	   ///
/// 	Here is the main info that will be retrieved by the App.   	   ///
//////////////////////////////////////////////////////////////////////////
	
const Info = {
	Name: "Retroarch",
	Description: "",
	Icon: 22,
	Category: 5,
	Type: "ELF",
	Value: getELFPath(),
};

// Set a Custom Icon for the plugin if it exists.

if (std.exists(`./APPS/retroarch/ico.png`)) { Info.CustomIcon = new Image(`./APPS/retroarch/ico.png`, RAM, async_list); }

return Info;

//////////////////////////////////////////////////////////////////////////
///*				   		   ENCLOSE END							  *///
//////////////////////////////////////////////////////////////////////////
	
})(); // DO NOT REMOVE, Encloses plugin on a local scope //