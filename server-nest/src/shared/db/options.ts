import { option } from "./option.js";
import { Options } from "../interfaces/options.js";

/**
 * 1. "Develop" is used by default for categories that do not have their own characteristics
 * 2.
 */

export const options: Options = {
  Develop: [option.Color, option.Made_in],
  Laptop: [
    option.Producer,
    option.Operating_System_PC,
    option.CPU_PC,
    option.Graphics,
    option.Screen_Diagonal,
    option.Type_Memory,
    option.RAM,
    option.Color,
    option.New_Used,
    option.Guarantee,
    option.Size_SSD,
    option.Size_HDD,
    option.Made_in,
  ],
  Smartphone: [
    option.CPU_MP,
    option.Operating_System_MP,
    option.RAM,
    option.Type_Matrix,
    option.Color,
    option.Guard,
    option.Guarantee,
    option.Screen_Refresh_Rate,
    option.Communication,
    option.Body_Material,
    option.Made_in,
    option.New_Used,
  ],
  Videocards: [
    option.Graphic_Chip,
    option.Memory_Capacity,
    option.Memory_Bus_Bit_Size,
    option.Type_Memory_Videocards,
    option.Graphics_Processor,
    option.Appointment,
    option.Interface_Videocards,
    option.Graphics_Processor_Family,
    option.Connector,
    option.Form_Factor_Videocards,
    option.Made_in,
    option.New_Used,
  ],
  SSD: [
    option.Size_SSD,
    option.Form_Factor_Storage,
    option.Connection_Interface,
    option.Storage_Type,
    option.Appointment_Storage,
    option.Memory_Element_Type,
    option.Made_in,
    option.New_Used,
  ],
  CPU_PC: [
    option.CPU_Family,
    option.CPU_Connector_Type,
    option.Integrated_Graphics,
    option.Number_of_Cores,
    option.Type_of_Packaging,
    option.CPU_Clock_Speed,
    option.CPU_Unlocked_Multiplier,
    option.CPU_Appointment,
    option.Made_in,
    option.New_Used,
  ],
  HDD: [
    option.Size_HDD,
    option.Storage_Type,
    option.Connection_Interface,
    option.Form_Factor_Storage,
    option.Appointment_Storage,
    option.Spindle_Rotation_Speed,
    option.Technology_HDD,
    option.Buffer_Size,
    option.Color,
    option.Made_in,
    option.New_Used,
  ],
  RAM: [
    option.RAM_Memory_Size,
    option.RAM_Memory_Type,
    option.Memory_Frequency,
    option.Number_of_Slats,
    option.Appointment_Storage,
    option.Memory_Timing_Scheme,
    option.Made_in,
    option.New_Used,
  ],
  Motherboards: [
    option.Socket,
    option.Chipset,
    option.Memory_Support,
    option.Form_Factor_Motherboard,
    option.Embedded_Video,
    option.Video_Outputs,
    option.PCI_Express_x16,
    option.PCI_Express_x1,
    option.USB,
    option.Made_in,
    option.New_Used,
  ],
  PSU: [
    option.Protection_Technologies,
    option.Form_Factor_PSU,
    option.Special_Properties,
    option.PSU_Type,
    option.Maximum_Noise_Level,
    option.Number_of_SATA_Connectors,
    option.Cooling_System,
    option.Made_in,
    option.New_Used,
  ],
  Cases: [
    option.Form_Factor_Motherboard,
    option.Housing_Type,
    option.Features,
    option.PSU_Location,
    option.Functionality_Connectors_Front_Panel,
    option.Color,
    option.View,
    option.Material,
    option.Installation_Method,
    option.Made_in,
    option.New_Used,
  ],
  Coolers: [
    option.Fan_Size,
    option.Appointment_Coolers,
    option.View_Coolers,
    option.Backlight,
    option.Bearing_Type,
    option.Cooling_Type,
    option.Construction,
    option.Component_CBA,
    option.Made_in,
    option.New_Used,
  ],
};
