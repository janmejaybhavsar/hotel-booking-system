public class Amenities {
    private int id = 0;
    private String amenityType;
    public Amenities(String amenityType){
        this.id++;
        this.amenityType = amenityType;
    }
    public int getId(){
        return id;
    }
    public String getAmenityType(){
        return amenityType;
    }
    public void setAmenityType(String amenityType){
        this.amenityType = amenityType;
    }
}
