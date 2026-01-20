"use client";

import React from "react";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clapperboard, AlertCircle, Film, Star } from "lucide-react";
import { toast } from "sonner";
import { genres } from "@/lib/mock-data";

interface FormData {
  title: string;
  genre: string;
  rating: string;
  synopsis: string;
  year: string;
  duration: string;
  director: string;
  image: string;
}

export default function AddMoviePage() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    genre: "Action",
    rating: "8.0",
    synopsis: "",
    year: "2024",
    duration: "",
    director: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Movie title is required";
    }
    if (!formData.synopsis.trim()) {
      newErrors.synopsis = "Synopsis is required";
    }
    if (!formData.director.trim()) {
      newErrors.director = "Director name is required";
    }
    if (!formData.duration.trim()) {
      newErrors.duration = "Duration is required";
    }
    if (!formData.image.trim()) {
      newErrors.image = "Poster URL is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(`Movie "${formData.title}" has been added successfully!`, {
        duration: 4000,
      });

      setFormData({
        title: "",
        genre: "Action",
        rating: "8.0",
        synopsis: "",
        year: "2024",
        duration: "",
        director: "",
        image: "",
      });
      setErrors({});
    } catch {
      toast.error("Failed to add movie. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clapperboard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground">
                  Add New Movie
                </h1>
                <p className="text-muted-foreground mt-1">
                  Submit a new film to the CineVerse database
                </p>
              </div>
            </div>
          </div>

          <Card className="border-border bg-card shadow-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-foreground flex items-center gap-2">
                <Film className="w-5 h-5 text-primary" />
                Movie Information
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill in all the details for your new movie entry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label
                    htmlFor="title"
                    className="text-foreground font-semibold"
                  >
                    Movie Title *
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g., The Dark Knight"
                    value={formData.title}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                  />
                  {errors.title && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errors.title}
                    </p>
                  )}
                </div>

                {/* Genre and Year Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="genre"
                      className="text-foreground font-semibold"
                    >
                      Genre
                    </Label>
                    <select
                      id="genre"
                      name="genre"
                      value={formData.genre}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      {genres.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="year"
                      className="text-foreground font-semibold"
                    >
                      Release Year
                    </Label>
                    <Input
                      id="year"
                      name="year"
                      type="number"
                      placeholder="2024"
                      min="1900"
                      max="2030"
                      value={formData.year}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {/* Rating and Duration Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="rating"
                      className="text-foreground font-semibold flex items-center gap-2"
                    >
                      <Star className="w-4 h-4 text-primary" />
                      Rating (out of 10)
                    </Label>
                    <Input
                      id="rating"
                      name="rating"
                      type="number"
                      placeholder="8.0"
                      step="0.1"
                      min="0"
                      max="10"
                      value={formData.rating}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="duration"
                      className="text-foreground font-semibold"
                    >
                      Duration *
                    </Label>
                    <Input
                      id="duration"
                      name="duration"
                      placeholder="e.g., 2h 32m"
                      value={formData.duration}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                    />
                    {errors.duration && (
                      <p className="text-sm text-destructive flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {errors.duration}
                      </p>
                    )}
                  </div>
                </div>

                {/* Director */}
                <div className="space-y-2">
                  <Label
                    htmlFor="director"
                    className="text-foreground font-semibold"
                  >
                    Director *
                  </Label>
                  <Input
                    id="director"
                    name="director"
                    placeholder="e.g., Christopher Nolan"
                    value={formData.director}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                  />
                  {errors.director && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errors.director}
                    </p>
                  )}
                </div>

                {/* Synopsis */}
                <div className="space-y-2">
                  <Label
                    htmlFor="synopsis"
                    className="text-foreground font-semibold"
                  >
                    Synopsis *
                  </Label>
                  <textarea
                    id="synopsis"
                    name="synopsis"
                    placeholder="Write a compelling synopsis that captures the essence of the film..."
                    value={formData.synopsis}
                    onChange={handleChange}
                    disabled={isLoading}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  {errors.synopsis && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errors.synopsis}
                    </p>
                  )}
                </div>

                {/* Poster URL */}
                <div className="space-y-2">
                  <Label
                    htmlFor="image"
                    className="text-foreground font-semibold"
                  >
                    Movie Poster URL *
                  </Label>
                  <Input
                    id="image"
                    name="image"
                    type="url"
                    placeholder="https://picsum.photos/400/600?random=10"
                    value={formData.image}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                  />
                  {errors.image && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errors.image}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Use picsum.photos for placeholder images or provide your own
                    poster URL
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    size="lg"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    {isLoading ? "Adding Movie..." : "Add Movie"}
                  </Button>
                  <Button
                    type="reset"
                    variant="outline"
                    size="lg"
                    disabled={isLoading}
                    className="flex-1 border-border hover:border-primary hover:text-primary bg-transparent"
                  >
                    Clear Form
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="mt-8 border-border bg-secondary/50">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">
                Tips for Adding Movies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>
                    Use the official movie title including subtitles if
                    applicable
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>
                    Write a synopsis that hooks readers without major spoilers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>
                    Use portrait orientation images for movie posters (2:3
                    ratio)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Double-check the director name and release year</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
