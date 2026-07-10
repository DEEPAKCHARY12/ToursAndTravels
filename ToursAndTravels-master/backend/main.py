from fastapi import FastAPI, Query, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, or_
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from typing import List, Optional

# Database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./flights.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Flight Model
class Flight(Base):
    __tablename__ = "flights"
    id = Column(Integer, primary_key=True, index=True)
    airline = Column(String)
    flight_number = Column(String)
    aircraft = Column(String)
    departure_time = Column(String)
    arrival_time = Column(String)
    departure_airport = Column(String)
    arrival_airport = Column(String)
    duration = Column(String)
    stops = Column(Integer)
    stop_details = Column(String, nullable=True)
    price = Column(Integer)

# Destination Model
class Destination(Base):
    __tablename__ = "destinations"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    image_url = Column(String)

from sqlalchemy import Table, ForeignKey, Float
from sqlalchemy.orm import relationship

# Association table for Trip <-> Activity many-to-many relationship
trip_activities = Table('trip_activities', Base.metadata,
    Column('trip_id', Integer, ForeignKey('trips.id')),
    Column('activity_id', String, ForeignKey('activities.id'))
)

# Activity Model
class Activity(Base):
    __tablename__ = "activities"
    id = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)
    category = Column(String)
    image_url = Column(String)
    price = Column(Integer)
    duration = Column(String)
    rating = Column(Float)

# Trip Model
class Trip(Base):
    __tablename__ = "trips"
    id = Column(Integer, primary_key=True, index=True)
    destination_id = Column(Integer, nullable=True)
    status = Column(String, default="Draft")
    current_step = Column(Integer, default=1)
    
    # Nullable columns for future steps
    travelers_adults = Column(Integer, default=1)
    travelers_children = Column(Integer, default=0)
    travelers_infants = Column(Integer, default=0)
    start_date = Column(String, nullable=True)
    end_date = Column(String, nullable=True)
    
    # Step 3 Preferences
    budget_per_person = Column(Integer, nullable=True)
    budget_category = Column(String, nullable=True)
    accommodation_type = Column(String, nullable=True)
    interests = Column(String, nullable=True)
    travel_pace = Column(String, nullable=True)
    
    # Step 4 Activities
    activities = relationship("Activity", secondary=trip_activities, backref="trips")

Trip.__table__.drop(engine, checkfirst=True)
Activity.__table__.drop(engine, checkfirst=True)
trip_activities.drop(engine, checkfirst=True)
Base.metadata.create_all(bind=engine)

# Seed Database logic
def seed_db():
    db = SessionLocal()
    # Clear existing data
    db.query(Flight).delete()
    db.query(Destination).delete()
    db.query(Activity).delete()
    
    flights_data = [
        {"airline": "British Airways", "flight_number": "BA-304", "aircraft": "Boeing 737", "departure_time": "07:20", "arrival_time": "09:40", "departure_airport": "LHR", "arrival_airport": "CDG", "duration": "1h 20m", "stops": 0, "stop_details": None, "price": 245},
        {"airline": "Air France", "flight_number": "AF-1129", "aircraft": "Airbus A320", "departure_time": "10:15", "arrival_time": "12:30", "departure_airport": "LHR", "arrival_airport": "CDG", "duration": "1h 15m", "stops": 0, "stop_details": None, "price": 210},
        {"airline": "EasyJet", "flight_number": "U2-8854", "aircraft": "Airbus A319", "departure_time": "14:45", "arrival_time": "17:10", "departure_airport": "LGW", "arrival_airport": "CDG", "duration": "1h 25m", "stops": 0, "stop_details": None, "price": 185},
        {"airline": "Vueling", "flight_number": "VY-7822", "aircraft": "Airbus A320", "departure_time": "08:00", "arrival_time": "12:45", "departure_airport": "LGW", "arrival_airport": "ORY", "duration": "3h 45m", "stops": 1, "stop_details": "AMS", "price": 156},
        {"airline": "Singapore Airlines", "flight_number": "SQ-317", "aircraft": "Airbus A350", "departure_time": "11:25", "arrival_time": "07:30", "departure_airport": "LHR", "arrival_airport": "SIN", "duration": "13h 05m", "stops": 0, "stop_details": None, "price": 890},
        {"airline": "Virgin Atlantic", "flight_number": "VS-003", "aircraft": "Airbus A330", "departure_time": "10:00", "arrival_time": "13:20", "departure_airport": "LHR", "arrival_airport": "JFK", "duration": "7h 20m", "stops": 0, "stop_details": None, "price": 550},
        {"airline": "Air India", "flight_number": "AI-162", "aircraft": "Boeing 777", "departure_time": "09:45", "arrival_time": "22:50", "departure_airport": "LHR", "arrival_airport": "DEL", "duration": "8h 35m", "stops": 0, "stop_details": None, "price": 480},
    ]
    
    for flight in flights_data:
        db_flight = Flight(**flight)
        db.add(db_flight)

    destinations_data = [
        {"name": "Paris, France", "description": "The City of Light, known for its cafe culture...", "image_url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=400&q=80"},
        {"name": "Tokyo, Japan", "description": "A mix of ultramodern style and traditional...", "image_url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80"},
        {"name": "Bali, Indonesia", "description": "An Indonesian paradise known for its forested...", "image_url": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80"},
        {"name": "New York, USA", "description": "The Big Apple, a global hub of culture...", "image_url": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80"},
    ]
    for dest in destinations_data:
        db_dest = Destination(**dest)
        db.add(db_dest)
        
    activities_data = [
        {"id": 'act-1', "name": 'Eiffel Tower Summit Access', "category": 'Culture', "image_url": 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&q=80&w=600', "price": 45, "duration": '3 hours', "rating": 4.8},
        {"id": 'act-2', "name": 'Louvre Museum Private Tour', "category": 'Culture', "image_url": 'https://images.unsplash.com/photo-1499856871940-a09627c6d7db?auto=format&fit=crop&q=80&w=600', "price": 120, "duration": '4 hours', "rating": 4.9},
        {"id": 'act-3', "name": 'Seine River Dinner Cruise', "category": 'Food', "image_url": 'https://images.unsplash.com/photo-1624546255753-fb340da256fb?auto=format&fit=crop&q=80&w=600', "price": 150, "duration": '2.5 hours', "rating": 4.6},
        {"id": 'act-4', "name": 'Montmartre Food & Wine Tour', "category": 'Food', "image_url": 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=600', "price": 90, "duration": '3 hours', "rating": 4.7},
        {"id": 'act-5', "name": 'Versailles Bike Tour', "category": 'Adventure', "image_url": 'https://images.unsplash.com/photo-1597928250767-17b204680876?auto=format&fit=crop&q=80&w=600', "price": 85, "duration": '7 hours', "rating": 4.8},
        {"id": 'act-6', "name": 'Moulin Rouge Show', "category": 'Nightlife', "image_url": 'https://images.unsplash.com/photo-1569335492211-5764b840e66c?auto=format&fit=crop&q=80&w=600', "price": 180, "duration": '4 hours', "rating": 4.5},
        {"id": 'act-7', "name": 'Luxury Spa Day', "category": 'Relaxation', "image_url": 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600', "price": 250, "duration": '5 hours', "rating": 4.9},
        {"id": 'act-8', "name": 'Galeries Lafayette Shopping Experience', "category": 'Shopping', "image_url": 'https://images.unsplash.com/photo-1596245974026-628d002be34e?auto=format&fit=crop&q=80&w=600', "price": 0, "duration": 'Flexible', "rating": 4.4}
    ]
    for act in activities_data:
        db_act = Activity(**act)
        db.add(db_act)
    
    db.commit()
    db.close()

seed_db()

# FastAPI App
app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For development, we can allow all
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Tours and Travels API is running. Access flight data at /api/flights"}

@app.get("/api/flights")
def get_flights(
    min_price: Optional[int] = None,
    max_price: Optional[int] = None,
    stops: Optional[List[int]] = Query(None),
    airlines: Optional[List[str]] = Query(None),
    sort_by: Optional[str] = "Best Value",
    origin: Optional[str] = None,
    destination: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Flight)
    
    if min_price is not None:
        query = query.filter(Flight.price >= min_price)
    if max_price is not None:
        query = query.filter(Flight.price <= max_price)
    if stops:
        query = query.filter(Flight.stops.in_(stops))
    if airlines:
        query = query.filter(Flight.airline.in_(airlines))
    if origin:
        query = query.filter(or_(Flight.departure_airport.ilike(f"%{origin}%")))
    if destination:
        query = query.filter(or_(Flight.arrival_airport.ilike(f"%{destination}%")))
        
    # Sorting logic
    if sort_by == "Price: Low to High" or sort_by == "Best Value":
        query = query.order_by(Flight.price.asc())
    
    return query.all()

from pydantic import BaseModel

class TripUpdateRequest(BaseModel):
    destination_id: Optional[int] = None
    current_step: Optional[int] = None
    travelers_adults: Optional[int] = None
    travelers_children: Optional[int] = None
    travelers_infants: Optional[int] = None
    budget_per_person: Optional[int] = None
    budget_category: Optional[str] = None
    accommodation_type: Optional[str] = None
    interests: Optional[str] = None
    travel_pace: Optional[str] = None

class TripActivitiesRequest(BaseModel):
    activity_ids: List[str]
    current_step: Optional[int] = None

@app.get("/api/destinations")
def get_destinations(db: Session = Depends(get_db)):
    return db.query(Destination).all()

@app.get("/api/activities")
def get_activities(category: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(Activity)
    if category:
        categories = category.split(",")
        query = query.filter(Activity.category.in_(categories))
    return query.all()

@app.post("/api/trips/start")
def start_trip(db: Session = Depends(get_db)):
    new_trip = Trip(status="Draft", current_step=1)
    db.add(new_trip)
    db.commit()
    db.refresh(new_trip)
    return {"trip_id": new_trip.id}

@app.patch("/api/trips/{trip_id}")
def update_trip(trip_id: int, request: TripUpdateRequest, db: Session = Depends(get_db)):
    trip = db.query(Trip).filter(Trip.id == trip_id).first()
    if not trip:
        return {"error": "Trip not found"}
    
    if request.destination_id is not None:
        trip.destination_id = request.destination_id
    if request.current_step is not None:
        trip.current_step = request.current_step
    if request.travelers_adults is not None:
        trip.travelers_adults = request.travelers_adults
    if request.travelers_children is not None:
        trip.travelers_children = request.travelers_children
    if request.travelers_infants is not None:
        trip.travelers_infants = request.travelers_infants
    if request.budget_per_person is not None:
        trip.budget_per_person = request.budget_per_person
    if request.budget_category is not None:
        trip.budget_category = request.budget_category
    if request.accommodation_type is not None:
        trip.accommodation_type = request.accommodation_type
    if request.interests is not None:
        trip.interests = request.interests
    if request.travel_pace is not None:
        trip.travel_pace = request.travel_pace
        
    db.commit()
    return {"message": "Trip updated successfully", "trip_id": trip.id}

@app.get("/api/trips/{trip_id}")
def get_trip(trip_id: int, db: Session = Depends(get_db)):
    trip = db.query(Trip).filter(Trip.id == trip_id).first()
    if not trip:
        return {"error": "Trip not found"}
        
    return {
        "id": trip.id,
        "destination_id": trip.destination_id,
        "status": trip.status,
        "current_step": trip.current_step,
        "travelers_adults": trip.travelers_adults,
        "travelers_children": trip.travelers_children,
        "travelers_infants": trip.travelers_infants,
        "start_date": trip.start_date,
        "end_date": trip.end_date,
        "budget_per_person": trip.budget_per_person,
        "budget_category": trip.budget_category,
        "accommodation_type": trip.accommodation_type,
        "interests": trip.interests,
        "travel_pace": trip.travel_pace,
        "activities": trip.activities
    }

@app.delete("/api/trips/{trip_id}")
def delete_trip(trip_id: int, db: Session = Depends(get_db)):
    trip = db.query(Trip).filter(Trip.id == trip_id).first()
    if not trip:
        return {"error": "Trip not found"}
    db.delete(trip)
    db.commit()
    return {"message": "Trip deleted successfully"}

@app.post("/api/trips/{trip_id}/confirm")
def confirm_trip(trip_id: int, db: Session = Depends(get_db)):
    trip = db.query(Trip).filter(Trip.id == trip_id).first()
    if not trip:
        return {"error": "Trip not found"}
    trip.status = "Confirmed"
    db.commit()
    return {"message": "Trip confirmed successfully"}

@app.patch("/api/trips/{trip_id}/activities")
def update_trip_activities(trip_id: int, request: TripActivitiesRequest, db: Session = Depends(get_db)):
    trip = db.query(Trip).filter(Trip.id == trip_id).first()
    if not trip:
        return {"error": "Trip not found"}
        
    # Get all activities that match the requested IDs
    selected_activities = db.query(Activity).filter(Activity.id.in_(request.activity_ids)).all()
    
    # Replace existing activities with new selection
    trip.activities = selected_activities
    
    if request.current_step is not None:
        trip.current_step = request.current_step
        
    db.commit()
    return {"message": "Trip activities updated successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
