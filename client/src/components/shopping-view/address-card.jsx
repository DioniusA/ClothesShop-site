import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer border-[#8C9E9B] ${
        selectedId?._id === addressInfo?._id
          ? "border-[#557D73] border-[4px]"
          : "border-[#D1E2E0]"
      }`}
    >
      <CardContent className="grid p-4 gap-4">
        <Label className="text-[#5C6B5C]">Address: {addressInfo?.address}</Label>
        <Label className="text-[#5C6B5C]">City: {addressInfo?.city}</Label>
        <Label className="text-[#5C6B5C]">Pincode: {addressInfo?.pincode}</Label>
        <Label className="text-[#5C6B5C]">Phone: {addressInfo?.phone}</Label>
        <Label className="text-[#5C6B5C]">Notes: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button
          className="bg-[#70A38D] hover:bg-[#4D7A64] text-white"
          onClick={() => handleEditAddress(addressInfo)}
        >
          Edit
        </Button>
        <Button
          className="bg-[#D18C6B] hover:bg-[#B16A4F] text-white"
          onClick={() => handleDeleteAddress(addressInfo)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
