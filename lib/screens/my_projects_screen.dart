import 'package:flutter/material.dart';

class MyProjectsScreen extends StatefulWidget {
  const MyProjectsScreen({super.key});

  @override
  State<MyProjectsScreen> createState() => _MyProjectsScreenState();
}

class _MyProjectsScreenState extends State<MyProjectsScreen> {
  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text("My projects"),
    );
  }
}
